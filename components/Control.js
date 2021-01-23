import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native';

const Control = ({isRunning, onHandleLeftButton, onHandleRightButton}) => {
    return (
        <View style={styles.control}>
            <TouchableOpacity
            style={[styles.wrapperButton, { backgroundColor: isRunning ? "#333333" : "#1c1c1e" }]}
            onPress={onHandleLeftButton}
            >
                <View style={[styles.innerButton, styles.leftButton]}>
                    <Text style={{ color: isRunning ? "#fff" : "#9d9ca2" }}>
                        {isRunning ? "Step" : "Reset"}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity
            style={[styles.wrapperButton, { backgroundColor: isRunning ? "#340e0d" : "#0a2a12" }]}
            onPress={onHandleRightButton}
            >
                <View style={[styles.innerButton, styles.rightButton]}>
                    <Text style={{ color: isRunning ? "#ea4c49" : "#37d05c" }}>
                        {isRunning ? "Stop" : "Start"}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const CENTER = {
    justifyContent: "center",
    alignItems: "center",
}

const styles = StyleSheet.create({
    control: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%"
    },
    wrapperButton: {
        ...CENTER,
        width: 70,
        height: 70,
        borderRadius: 70,
    },
    innerButton: {
        ...CENTER,
        width: 65,
        height: 65,
        borderRadius: 65,
        color: "white"
    },
})

export default Control
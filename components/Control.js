import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { StyleSheet } from 'react-native';

const Control = () => {
    return (
        <View style={styles.control}>
            <TouchableOpacity style={styles.wrapperButton}>
                <View style={[styles.innerButton, styles.leftButton]}>
                    <Text style={{color: "white"}}>
                        Step
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.wrapperButton}>
                <View style={[styles.innerButton, styles.rightButton]}>
                    <Text style={{color: "white"}}>
                        Start
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
    leftButton: {
        backgroundColor: "#1c1c1e"
    },
    rightButton: {
        backgroundColor: "#37d05c"
    }
})

export default Control
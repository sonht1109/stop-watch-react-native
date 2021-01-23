import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Result from './Result';
import { StyleSheet } from 'react-native';
import Control from './Control';

const StopWatch = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.display}>
        <Text style={{ color: "white", fontSize: 36 }}>00:00:00,00</Text>
      </View>
      <Control />
      <Result style={styles.result} />
    </SafeAreaView>
  )
}

const CENTER = {
  justifyContent: "center",
  alignItems: "center"
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: "white",
    backgroundColor: "black"
  },
  display: {
    ...CENTER,
    flex: 0.6,
  },
  result: {
    flex: 0.4
  }
})

export default StopWatch
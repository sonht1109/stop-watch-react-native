import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import Result from './Result';
import { StyleSheet } from 'react-native';
import Control from './Control';
import { useState } from 'react';
import { formatTime } from './util';

const StopWatch = () => {

  const [results, setResults] = useState([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [timer, setTimer] = useState(null);

  const onHandleLeftButton = () => {
    if (isRunning) {
      setResults((prevState) => {
        const tempState = [...prevState]
        tempState.unshift(currentTime)
        return tempState
      })
    }
    else {
      setResults([])
      setCurrentTime(0)
    }
  }

  const onHandleRightButton = () => {
    if (isRunning) {
      clearInterval(timer)
    }
    else {
      const interval = setInterval(() => {
        setCurrentTime((prevState) => prevState + 1)
      }, 10)
      setTimer(interval)
    }
    setIsRunning((prevState) => !prevState)
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.display}>
        <Text style={{ color: "white", fontSize: 36 }}>
          {formatTime(currentTime)}
        </Text>
      </View>

      <View style={styles.control}>
        <Control

          isRunning={isRunning}
          onHandleLeftButton={onHandleLeftButton}
          onHandleRightButton={onHandleRightButton}
        />
      </View>

      <View style={styles.result}>
        <Result results={results} />
      </View>
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
    flex: 0.4,
  },
  control: {
    flex: 0.2
  },
  result: {
    flex: 0.4
  }
})

export default StopWatch
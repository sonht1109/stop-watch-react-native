import React from 'react'
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';
import { formatTime } from './util';

const Result = ({results})=> {

  const resultElement = (time, index)=> {
    return(
      <View
      style={{flexDirection: "row", padding: 15, borderTopColor: "#313131", borderWidth: 1}}
      key={index}
      >
        <Text style={{color: "white"}}>Step {index+1}</Text>
        <Text style={{color: "white", marginLeft: "auto"}}>
          {formatTime(time)}
        </Text>
      </View>
    )
  }

  return(
    <ScrollView style={{marginTop: 30}}>
      {results.map((time, index) => {
        return resultElement(time, index)
      })}
    </ScrollView>
  )
}

export default Result
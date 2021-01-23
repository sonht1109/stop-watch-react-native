import React from 'react'
import { Text, View } from 'react-native';
import { ScrollView } from 'react-native';

const Result = ()=> {
  return(
    <ScrollView style={{marginTop: 30}}>
      <View>
        <Text style={{color: "white"}}>Step 1</Text>
        <Text style={{color: "white"}}>00:00:00,02</Text>
      </View>
    </ScrollView>
  )
}

export default Result
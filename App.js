import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {useState, useEffect} from 'react'
import CountDown from './Components/Countdown'



export default function App() {

  const [countdownArray, setcountdownArray] = useState(["grey", "white"])

  return (
    <View style={styles.container}>
      {countdownArray.map(color => (
          <CountDown style={{alignSelf: 'flex-start'}} color={color} key={color.toString()}></CountDown>
      ))}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  countDown:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },  
  days:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  hours:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  minutes:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  seconds:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 30,
  },
  text:{
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },

});

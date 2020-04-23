import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {useState, useEffect} from 'react'
import CountDown from './Components/Countdown'



export default function App() {

  const [countdownArray, setcountdownArray] = useState([{title: "Vapo vapo",date: "Apr 25, 2020", color: "white"}, {title: "Encontro com a gata", date: "Apr 26, 2020", color: "white"}])

  return (
    <View style={styles.container}>
      {countdownArray.map(countdown => (
          <CountDown style={{alignSelf: 'flex-start'}} title={countdown.title} date={countdown.date} color={countdown.color} key={countdown.title}/>
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

});

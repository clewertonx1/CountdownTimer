import * as React from 'react';
import { StyleSheet, Text, ScrollView, TouchableOpacity, TextInput, View } from 'react-native';
import {useState, useEffect} from 'react'
import CountDown from './Components/Countdown'



export default function App() {

  const [countdownArray, setcountdownArray] = useState([
    {title: "Vapo",date: "Dec 26, 2020, 13:40", color: "white"},
    {title: "Date with girlfriend", date: "May 26, 2020, 12:10:10", color: "white"},
    {title: "Vapo",date: "Dec 26, 2020, 13:40", color: "white"},
  ])

  return (
    <ScrollView style={styles.container}>
      <View style={{marginTop: 50}}>
        {countdownArray.map(countdown => (
            <CountDown style={{alignSelf: 'flex-start'}} title={countdown.title} date={countdown.date} color={countdown.color} key={countdown.title}/>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#F5FCFF',
  },

});

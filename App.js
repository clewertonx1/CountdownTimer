import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import {useState, useEffect} from 'react'
import Countdown from './Components/Countdown'



export default function App() {

  var now = new Date().getTime();
  var countDownDate = new Date("Apr 25, 2020").getTime();
  var distance = countDownDate - now;
  
  const [count , setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  

  return (
    <View style={styles.container}>
      <View style={styles.countDown}>
        <View style={styles.days}>
          <Text>D</Text>
          <Text style={styles.text}>{days}</Text>
        </View>
        
        <View style={styles.hours}>
          <Text>H</Text>
          <Text style={styles.text}>{hours}</Text>
        </View>

        <View style={styles.minutes}>
          <Text>M</Text>
          <Text style={styles.text}>{minutes}</Text>
        </View>

        <View style={styles.seconds}>
          <Text>S</Text>
          <Text style={styles.text}>{seconds}</Text>
        </View>
        
        
      </View>
      
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

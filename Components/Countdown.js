import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {useState, useEffect} from 'react'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';
import Cicleprogress from "./Cicleprogress"


export default function CountDown(params) {

  let [fontsLoaded] = useFonts({
    'Roboto-Thin': require('../assets/fonts/Roboto-Thin.ttf'),
    'Roboto-Light': require('../assets/fonts/Roboto-Light.ttf'),
  });

  const [date, setDate] = useState(params.date)
  const [countDownDate, setCountDownDate] = useState(new Date(date).getTime())

  var now = new Date().getTime()
  var distance = countDownDate - now
  
  const [count , setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])


  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <View style={[styles.container,]}>
      <Text style={styles.title}>{params.title}</Text>
      
      
      <View style={[styles.countDown, {backgroundColor: params.color} ]}>
        <View style={styles.numbersView}>  
          <Text style={styles.text}>{days}</Text>
          <Cicleprogress progress={days>366 ? 0.999 : days/365 }></Cicleprogress>
        </View>
        
        <View style={styles.numbersView}>
          <Text style={styles.text}>{hours}</Text>
          <Cicleprogress progress={hours/24}></Cicleprogress>
        </View>

        <View style={styles.numbersView}>
          <Text style={styles.text}>{minutes}</Text>
          <Cicleprogress progress={minutes/60}></Cicleprogress>
        </View>

        <View style={styles.numbersView}>
          <Text style={[styles.text,]}>{seconds}</Text>
          <Cicleprogress progress={seconds/60}></Cicleprogress>
        </View>
        
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  countDown:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: "100%",
    height: 60,
  },  
  numbersView:{
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  text:{
    alignItems: 'center',
    fontSize: 15,
    fontFamily: "Roboto-Light", 
    position: 'absolute',
    alignSelf: 'center',
    zIndex: 2,
    top: 15
    
  },
  title:{
    fontFamily: 'Roboto-Thin',
    fontSize: 18,
    color: "#333",
    
  },

});

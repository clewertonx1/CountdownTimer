import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import {useState, useEffect} from 'react'
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';



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
          <Text>D</Text>
          <Text style={styles.text}>{days}</Text>
        </View>
        
        <View style={styles.numbersView}>
          <Text>H</Text>
          <Text style={styles.text}>{hours}</Text>
        </View>

        <View style={styles.numbersView}>
          <Text>M</Text>
          <Text style={styles.text}>{minutes}</Text>
        </View>

        <View style={styles.numbersView}>
          <Text>S</Text>
          <Text style={styles.text}>{seconds}</Text>
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
    height: 50,
  },  
  numbersView:{
    flex: 1,
    alignItems: 'center',
    margin: 30,
  },
  text:{
    alignItems: 'center',
    fontSize: 20,
    fontFamily: "Roboto-Light", 
  },
  title:{
    fontFamily: 'Roboto-Thin',
    fontSize: 18,
    color: "#333",
    
  },

});

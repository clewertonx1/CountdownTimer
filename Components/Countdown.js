import * as React from 'react';
import {useState, useEffect} from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';

export default function Countdown() {

   
    var now = new Date().getTime();
    var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
    var distance = countDownDate - now;
    
    const [count , setCount] = useState(0)
    useEffect(() => {
        setCount(count+1)
        console.log(count)
    },[count])
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return (
    <View style={styles.container}>
        <Text>{count}</Text>
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

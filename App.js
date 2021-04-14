import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';
import Loading from './loading';
import Weather from './Weather';
import axios from 'axios';

const apikey = 'a6e3ba13d0a4c5f2ea10dc4bbfbe8ba9';

export default class extends React.Component {

  state = {
    isLoading:true
  }

  getWeather = async (latitude, longitude) => {
    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=metric`);
    this.setState({isLoading: false, temp: data.main.temp});
    console.log(data)
  }

  getLocation = async () => {
    try {

      await Location.requestPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно :(")
    }

  }

  componentDidMount() {
    this.getLocation();
  }

  render () {
    const {isLoading, temp} = this.state;
    return (
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)}/>
      );
    }
  }

  /*   const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    yellowView: {
      flex: 1,
      backgroundColor: 'yellow'
    },
    blueView: {
      flex: 1,
      backgroundColor: 'blue'
    }
  }); */

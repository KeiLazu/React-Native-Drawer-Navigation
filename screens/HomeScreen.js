import React, { Component } from 'react'
import { View, Text, SafeAreaView } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return(
      <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>HOME PAGE</Text>
      </View>
      </SafeAreaView>
    );
  }
}
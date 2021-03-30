import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!!!</Text>
      <StatusBar style="auto" />
      <Button title='GO' onPress={() => onPressButton()}/>
    </View>
  );
}

function onPressButton() {
  Alert.alert('Simple Button pressed!!!');
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

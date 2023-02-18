import React from 'react';
import { SafeAreaView,StatusBar,StyleSheet } from 'react-native';
import { Routes } from './src/routes';

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style='auto'/>
        <Routes/>
      </SafeAreaView>
     
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

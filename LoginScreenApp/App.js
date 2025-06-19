import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import LoginScreen from './screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </SafeAreaView>
  );
};

export default App;
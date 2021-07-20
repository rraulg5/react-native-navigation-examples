import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default App;

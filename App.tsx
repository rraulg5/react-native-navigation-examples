import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { Text } from 'react-native';
// import { StackNavigator } from './src/navigation/StackNavigator';
import { DrawerNavigator } from './src/navigation/DrawerNavigator';
// import { BottomTabsNavigator } from './src/navigation/BottomTabsNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        {/* <StackNavigator /> */}
        <DrawerNavigator />
        {/* <BottomTabsNavigator /> */}
      </AppState>
    </NavigationContainer>
  );
};

const AppState = ({ children }: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default App;

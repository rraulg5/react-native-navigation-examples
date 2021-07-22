import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1 } from '../screens/Tab1';
import { Tab2 } from '../screens/Tab2';
import { Tab3 } from '../screens/Tab3';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { color } from 'react-native-reanimated';

export const Tabs = () => {
  return Platform.OS === 'ios' ? (
    <BottomTabsNavigatoriOS />
  ) : (
    <BottomTabsNavigatorAndroid />
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

const BottomTabsNavigatorAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{ backgroundColor: colors.primary }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let icon: string = '';

          switch (route.name) {
            case 'Tab1':
              icon = 'T1';
              break;
            case 'Tab2':
              icon = 'T2';
              break;
            case 'StackNavigator':
              icon = 'StNav';
              break;
          }

          return <Text style={{ color }}>{icon}</Text>;
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1" component={Tab1} />
      <BottomTabAndroid.Screen name="Tab2" component={Tab2} />
      <BottomTabAndroid.Screen
        name="StackNavigator"
        component={StackNavigator}
      />
    </BottomTabAndroid.Navigator>
  );
};

const BottomTabiOS = createBottomTabNavigator();

const BottomTabsNavigatoriOS = () => {
  return (
    <BottomTabiOS.Navigator
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        activeTintColor: colors.primary,
        style: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        labelStyle: {
          fontSize: 15,
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          let icon: string = '';

          switch (route.name) {
            case 'Tab1':
              icon = 'T1';
              break;
            case 'Tab2':
              icon = 'T2';
              break;
            case 'StackNavigator':
              icon = 'StNav';
              break;
          }

          return <Text style={{ color }}>{icon}</Text>;
        },
      })}
    >
      <BottomTabiOS.Screen name="Tab1" component={Tab1} />
      <BottomTabiOS.Screen name="Tab2" component={Tab2} />
      <BottomTabiOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabiOS.Navigator>
  );
};

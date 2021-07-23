import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Tab1 } from '../screens/Tab1';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import { Platform } from 'react-native';
import { TopTabNavigator } from './TobTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

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
              icon = 'home-outline';
              break;
            case 'Tab2':
              icon = 'leaf-outline';
              break;
            case 'StackNavigator':
              icon = 'layers-outline';
              break;
          }

          return (
            <Text style={{ color, textAlign: 'center' }}>
              <Icon name={icon} size={20} color="white" />
            </Text>
          );
        },
      })}
    >
      <BottomTabAndroid.Screen name="Tab1" component={Tab1} />
      <BottomTabAndroid.Screen name="Tab2" component={TopTabNavigator} />
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
              icon = 'home-outline';
              break;
            case 'Tab2':
              icon = 'leaf-outline';
              break;
            case 'StackNavigator':
              icon = 'layers-outline';
              break;
          }

          return (
            <Text style={{ color, textAlign: 'center' }}>
              <Icon name={icon} size={20} color={colors.primary} />
            </Text>
          );
        },
      })}
    >
      <BottomTabiOS.Screen name="Tab1" component={Tab1} />
      <BottomTabiOS.Screen name="Tab2" component={TopTabNavigator} />
      <BottomTabiOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabiOS.Navigator>
  );
};

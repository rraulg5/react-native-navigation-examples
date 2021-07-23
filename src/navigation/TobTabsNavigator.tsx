import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Chat } from '../screens/Chat';
import { Contact } from '../screens/Contact';
import { Albums } from '../screens/Albums';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/appTheme';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const { top } = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{ paddingTop: top }}
      sceneContainerStyle={{ backgroundColor: 'white' }}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: { backgroundColor: colors.primary },
        style: {
          borderBottomColor: colors.primary,
          borderBottomWidth: 0,
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let icon: string = '';

          switch (route.name) {
            case 'Chat':
              icon = 'chatbox-ellipses-outline';
              break;
            case 'Contact':
              icon = 'cafe-outline';
              break;
            case 'Albums':
              icon = 'caret-forward-circle-outline';
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
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Albums" component={Albums} />
    </Tab.Navigator>
  );
};

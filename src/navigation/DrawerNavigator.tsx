import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { Settings } from '../screens/Settings';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="StackNavigator" component={StackNavigator} />
      <Drawer.Screen name="Settings" component={Settings} />
    </Drawer.Navigator>
  );
};

const DrawerMenu = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={styles.avatarContainer}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png',
          }}
          style={styles.avatar}
        />
      </View>
      {/* end Avatar */}

      {/* Menu Options */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate('StackNavigator');
          }}
        >
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        >
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* end Menu Options */}
    </DrawerContentScrollView>
  );
};

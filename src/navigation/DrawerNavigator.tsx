import React from 'react';

import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { Settings } from '../screens/Settings';
import {
  useWindowDimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { Tabs } from './BottomTabsNavigator';
import Icon from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <DrawerMenu {...props} />}
    >
      <Drawer.Screen name="BottomTabsNavigator" component={Tabs} />
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
            navigation.navigate('BottomTabsNavigator');
          }}
        >
          <Icon
            name="rocket"
            size={22}
            color={colors.primary}
            style={{ paddingRight: 10, alignContent: 'center' }}
          />
          <Text style={styles.menuText}>Navigation</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => {
            navigation.navigate('Settings');
          }}
        >
          <Icon
            name="settings-outline"
            size={22}
            color={colors.primary}
            style={{ paddingRight: 10, alignContent: 'center' }}
          />
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>
      </View>
      {/* end Menu Options */}
    </DrawerContentScrollView>
  );
};

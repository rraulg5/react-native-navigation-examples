import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles, colors } from '../theme/appTheme';
import { TouchableIcon } from '../components/TouchableIcon';

export const Tab1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <TouchableIcon iconName="airplane-outline" />
        <TouchableIcon iconName="attach-outline" />
        <TouchableIcon iconName="bonfire-outline" />
        <TouchableIcon iconName="calculator-outline" />
        <TouchableIcon iconName="images-outline" />
      </Text>
    </View>
  );
};

import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';
import { styles } from '../theme/appTheme';

export const Tab1 = () => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Iconos</Text>
      <Text>
        <Icon name="rocket" size={80} color="#900" />
      </Text>
    </View>
  );
};

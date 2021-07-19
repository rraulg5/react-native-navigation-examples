import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page1 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 1</Text>

      <Button
        title="Go to page 2"
        onPress={() => {
          navigation.navigate('Page2');
        }}
      />

      <Text>Navigation with props</Text>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{ ...styles.btnLg, backgroundColor: '#FF9427' }}
          onPress={() => {
            navigation.navigate('Person', {
              id: 1,
              name: 'Raul',
            });
          }}
        >
          <Text style={styles.btnLgText}>Raul</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ ...styles.btnLg, backgroundColor: '#5856D6' }}
          onPress={() => {
            navigation.navigate('Person', {
              id: 2,
              name: 'Paulina',
            });
          }}
        >
          <Text style={styles.btnLgText}>Paulina</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

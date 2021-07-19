import React from 'react';
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { useEffect } from 'react';

interface Props extends StackScreenProps<RootStackParams, 'Person'> {}

export const Person = ({ route, navigation }: Props) => {
  const params = route.params;

  useEffect(() => {
    navigation.setOptions({ title: params.name });
  }, []);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>{params.name} Screen</Text>
    </View>
  );
};

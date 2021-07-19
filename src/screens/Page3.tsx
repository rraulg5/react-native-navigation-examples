import React from 'react';
import { Button, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> {}

export const Page3 = ({ navigation }: Props) => {
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 3</Text>

      <Button
        title="Go back"
        onPress={() => {
          navigation.pop();
        }}
      />

      <Button
        title="Go to Page 1"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

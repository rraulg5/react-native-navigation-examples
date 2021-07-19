import React, { useEffect } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { useNavigation } from '@react-navigation/native';

export const Page2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Page 2</Text>

      <Button
        title="Go to page 3"
        onPress={() => {
          navigation.navigate('Page3');
        }}
      />
    </View>
  );
};

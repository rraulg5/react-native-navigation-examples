import React from 'react';
import { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const Contact = () => {
  const { authState, signIn } = useContext(AuthContext);

  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Contact</Text>

      {!authState.isLoggedIn && <Button title="Sign In" onPress={signIn} />}
    </View>
  );
};

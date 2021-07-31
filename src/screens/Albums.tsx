import React, { useContext } from 'react';
import { Text, View, Button } from 'react-native';
import { styles } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

export const Albums = () => {
  const { authState, logout } = useContext(AuthContext);
  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Albums</Text>

      {authState.isLoggedIn && <Button title="Log out" onPress={logout} />}
    </View>
  );
};

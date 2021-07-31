import React from 'react';
import { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { styles, colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons';

export const Settings = () => {
  const { top } = useSafeAreaInsets();

  const { authState } = useContext(AuthContext);

  return (
    <View style={{ ...styles.globalMargin, marginTop: top + 20 }}>
      <Text style={styles.title}>Settings page</Text>

      <Text>{JSON.stringify(authState, null, 4)}</Text>

      {authState.favoriteIcon && (
        <Icon name={authState.favoriteIcon} size={150} color={colors.primary} />
      )}
    </View>
  );
};

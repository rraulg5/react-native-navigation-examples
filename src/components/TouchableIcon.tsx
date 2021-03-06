import React from 'react';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { colors } from '../theme/appTheme';
import { AuthContext } from '../context/AuthContext';

interface Props {
  iconName: string;
}

export const TouchableIcon = ({ iconName }: Props) => {
  const { updateFavoriteIcon } = useContext(AuthContext);
  return (
    <TouchableOpacity
      onPress={() => {
        updateFavoriteIcon(iconName);
      }}
    >
      <Icon name={iconName} size={80} color={colors.primary} />
    </TouchableOpacity>
  );
};

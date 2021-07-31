import React, { createContext } from 'react';
import { useReducer } from 'react';
import { authReducer } from './authReducer';

export interface AuthState {
  isLoggedIn: boolean;
  username?: string;
  favoriteIcon?: string;
}

// Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon: undefined,
};

export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  logout: () => void;
  updateFavoriteIcon: (iconName: string) => void;
  updateUserName: (username: string) => void;
}

// Create Context
export const AuthContext = createContext({} as AuthContextProps);

// Provider
export const AuthProvider = ({ children }: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({ type: 'signIn' });
  };

  const updateFavoriteIcon = (iconName: string) => {
    dispatch({ type: 'updateFavIcon', payload: iconName });
  };

  const logout = () => {
    dispatch({ type: 'logout' });
  };

  const updateUserName = (username: string) => {
    dispatch({ type: 'updateUserName', payload: username });
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logout,
        updateFavoriteIcon,
        updateUserName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

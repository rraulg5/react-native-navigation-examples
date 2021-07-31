import { AuthState } from './AuthContext';

type AuthAction =
  | { type: 'signIn' }
  | { type: 'logout' }
  | { type: 'updateFavIcon'; payload: string }
  | { type: 'updateUserName'; payload: string };

export const authReducer = (
  state: AuthState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        username: 'no-username-yet',
      };

    case 'logout':
      return {
        isLoggedIn: false,
        username: undefined,
        favoriteIcon: undefined,
      };

    case 'updateFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };

    case 'updateUserName':
      return {
        ...state,
        username: action.payload,
      };

    default:
      return state;
  }
};

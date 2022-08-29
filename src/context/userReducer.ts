import { AuthContext } from '@context/userContext';

export const initialState: AuthContext = {
  user: null,
  token: null,
  saveUser: () => null,
  removeUser: () => null,
  addTokenToStorage: () => null,
  restoreUserFromStorage: () => null,
  getUser: () => null,
  getToken: () => null,
};

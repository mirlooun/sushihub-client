import { createContext, useContext, useState } from 'react';
import { User } from 'src/models/User';
import jwt_decode from 'jwt-decode';
import * as SecureStore from 'expo-secure-store';
import { initialState } from '@context/userReducer';

export interface AuthContext {
  user: User | null;
  token: string | null;

  saveUser: (token: string) => void;
  removeUser: () => void;
  addTokenToStorage: (token: string) => void;
  restoreUserFromStorage: () => void;
  getUser: () => User | null;
  updateUser: (updatedUser: User) => void;
  getToken: () => string | null;
}

const AuthContext = createContext<AuthContext>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const saveUser = (token: string) => {
    const user = jwt_decode<User>(token);
    setUser(user);
    setToken(token);
  };

  const removeUser = async () => {
    await SecureStore.deleteItemAsync('token');
    setUser(null);
    setToken(null);
  };

  const addTokenToStorage = async (token: string) => {
    await SecureStore.setItemAsync('token', token);
  };

  const restoreUserFromStorage = async () => {
    const token = await SecureStore.getItemAsync('token');
    if (token) {
      const user = jwt_decode<User>(token);
      setUser(user);
    }
  };

  const getUser = () => {
    return user;
  };

  const updateUser = (updatedUser: User) => {
    setUser({ ...updatedUser });
  };

  const getToken = () => {
    return token;
  };

  const value = {
    user: null,
    token: null,
    saveUser,
    removeUser,
    addTokenToStorage,
    restoreUserFromStorage,
    getUser,
    updateUser,
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;

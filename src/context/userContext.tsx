import { createContext, useContext, useState } from 'react';
import { User } from 'src/models/User';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import { initialState } from '@context/userReducer';

export interface AuthContext {
  user: User | null;
  token: string | null;

  saveUser: (token: string) => void;
  removeUser: () => void;
  addTokenToStorage: (token: string) => void;
  restoreUserFromStorage: () => void;
  getUser: () => User | null;
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
    await AsyncStorage.removeItem('token');
    setUser(null);
    setToken(null);
  };

  const addTokenToStorage = async (token: string) => {
    await AsyncStorage.setItem('token', token);
  };

  const restoreUserFromStorage = async () => {
    const token = await AsyncStorage.getItem('token');

    if (token) {
      const user = jwt_decode<User>(token);
      setUser(user);
    }
  };

  const getUser = () => {
    return user;
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
    getToken,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};

export default useAuth;

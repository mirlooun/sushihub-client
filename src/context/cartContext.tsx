import { createContext, ReactNode, useContext } from 'react';
import { useReducer } from 'react';
import { MenuItem } from '@models/MenuItem';
import cartReducer, { initialState } from './cartReducer';

export interface CartContext {
  total: number;
  cartItems: MenuItem[];
  isInCart: (menuItem: MenuItem) => boolean;
  addToCart: (menuItem: MenuItem) => void;
  removeFromCart: (menuItem: MenuItem) => void;
}

const CartContext = createContext<CartContext>(initialState);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (menuItem: MenuItem) => {
    const updatedCart: MenuItem[] = state.cartItems.concat(menuItem);
    updatePrice(updatedCart);

    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        menuItems: updatedCart,
      },
    });
  };

  const removeFromCart = (menuItem: MenuItem) => {
    const updatedCart = state.cartItems.filter((item) => item.id !== menuItem.id);
    updatePrice(updatedCart);

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        menuItems: updatedCart,
      },
    });
  };

  const updatePrice = (menuItems: MenuItem[]) => {
    let total = 0;

    menuItems.forEach((item) => {
      if (item.discountedPrice) {
        total += item.discountedPrice;
      } else {
        total += item.price;
      }
    });

    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total,
      },
    });
  };

  const isInCart = (menuItem: MenuItem) => {
    return Boolean(state.cartItems.find((item) => item.title === menuItem.title));
  };

  const value = {
    total: state.total,
    cartItems: state.cartItems,
    isInCart,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default useCart;

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
  updateAmount: (menuItem: MenuItem, action: 'add' | 'remove') => void;
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
        total += item.discountedPrice * (item.amount as number);
      } else {
        total += item.price * (item.amount as number);
      }
    });

    dispatch({
      type: 'UPDATE_TOTAL',
      payload: {
        total,
      },
    });
  };

  const updateAmount = (menuItem: MenuItem, action: 'add' | 'remove') => {
    const cartItems = [...state.cartItems];

    const menuItemFromCart = cartItems.find((item) => item.id === menuItem.id);

    if (menuItemFromCart) {
      const itemAmount = menuItemFromCart.amount as number;
      if (action === 'add') {
        if (itemAmount > 50) return;
        menuItemFromCart.amount = itemAmount + 1;
      } else {
        if (itemAmount === 1) return;
        menuItemFromCart.amount = itemAmount - 1;
      }
    }

    updatePrice(cartItems);

    dispatch({
      type: 'UPDATE_AMOUNT',
      payload: {
        cartItems,
      },
    });
  };

  const isInCart = (menuItem: MenuItem) => {
    return Boolean(state.cartItems.find((item) => item.id === menuItem.id));
  };

  const value = {
    total: state.total,
    cartItems: state.cartItems,
    isInCart,
    addToCart,
    removeFromCart,
    updateAmount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);
  return context;
};

export default useCart;

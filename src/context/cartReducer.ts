import { CartContext } from '@context/cartContext';
import { MenuItem } from '@models/MenuItem';

export const initialState: CartContext = {
  total: 0,
  cartItems: [],
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
};

interface CartActionA {
  type: 'ADD_TO_CART' | 'REMOVE_FROM_CART';
  payload: {
    menuItems: MenuItem[];
  };
}

interface CartActionB {
  type: 'UPDATE_TOTAL';
  payload: {
    total: number;
  };
}

type CartAction = CartActionA | CartActionB;

const cartReducer = (state: CartContext, action: CartAction) => {
  const { type, payload } = action;

  switch (type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartItems: [...payload.menuItems],
      };
    }
    case 'REMOVE_FROM_CART': {
      return {
        ...state,
        cartItems: [...payload.menuItems],
      };
    }
    case 'UPDATE_TOTAL': {
      return {
        ...state,
        total: payload.total,
      };
    }
  }
};

export default cartReducer;

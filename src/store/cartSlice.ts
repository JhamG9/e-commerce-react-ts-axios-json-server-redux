import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartI } from "../interfaces/Cart.interface";
import { getCartAction } from "../actions/cart.action";
import { AppDispatch } from "./store";

export interface CartState {
  items: CartI[];
  isLoaded: boolean;
}

const initialState: CartState = {
  items: [],
  isLoaded: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state, action: PayloadAction<CartI[]>) {
      state.items = action.payload;
      state.isLoaded = true;
    }
  },
});

export const { initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

export const fetchCart = () => async (dispatch: AppDispatch) => {  
  const cart = await getCartAction();
  dispatch(initializeCart(cart));
};
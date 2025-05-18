import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartI } from "../interfaces/Cart.interface";
import { getCartAction } from "../actions/cart.action";
import { AppDispatch } from "./store";

interface CartState {
  items: CartI[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    initializeCart(state, action: PayloadAction<CartI[]>) {
      state.items = action.payload;
    }
  },
});

export const { initializeCart } = cartSlice.actions;
export default cartSlice.reducer;

export const fetchCart = () => async (dispatch: AppDispatch) => {  
  const cart = await getCartAction();
  dispatch(initializeCart(cart));
};
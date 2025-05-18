import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Tipos para usar en tus componentes
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

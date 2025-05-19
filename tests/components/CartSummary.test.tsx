import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "../../src/store/cartSlice";
import { BrowserRouter } from "react-router-dom";
import { CartSummary } from "../../src/components/CartSummary";
import { emptyCartState, oneItemCartState } from "../mocks/cartMocks";

type RootState = {
  cart: CartState;
};

interface RenderWithProvidersOptions {
  preloadedState?: Partial<RootState>;
  store?: EnhancedStore<RootState>;
}

const renderWithProviders = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer: { cart: cartReducer },
      preloadedState: preloadedState as RootState, // Asegúrate que el tipo sea el correcto
    }),
  }: RenderWithProvidersOptions = {}
) => {
  return {
    store,
    ...render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    ),
  };
};

describe("Unit Test on <CartSummary />", () => {
  it("should not display badge when cart is empty", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: emptyCartState,
    });

    expect(screen.queryByTestId("cart-badge")).toBeNull();
  });

  it("should display badge with total items when cart has items", () => {
    renderWithProviders(<CartSummary />, {
      preloadedState: oneItemCartState,
    });
    expect(screen.getByTestId("cart-badge").textContent).toBe("1");
  });
});

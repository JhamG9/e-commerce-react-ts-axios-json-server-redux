import { CartState } from "../../src/store/cartSlice";
import { RootState } from "../../src/store/store";

const cartEmpty: CartState = {
  items: [],
  isLoaded: false,
};

const cartWithOneItem: CartState = {
  items: [
    {
      id: "f7bc",
      userId: "ftr356",
      productId: "8fdh",
      quantity: 1,
      product: {
        id: "9fy4",
        name: "Tomate chonto (1 kg)",
        description: "Tomate fresco y jugoso. Ideal para salsas y ensaladas.",
        price: 3500,
        stock: 130,
        category: "verduras",
        image: "https://pngimg.com/uploads/tomato/tomato_PNG12542.png",
      },
    },
  ],
  isLoaded: true,
};

export const emptyCartState: RootState = {
  cart: cartEmpty,
};

export const oneItemCartState: RootState = {
  cart: cartWithOneItem,
};

import { render, screen, waitFor } from "@testing-library/react";
import { Dashboard } from "../../../src/pages/dashboard/Dashboard";
import * as reactRedux from "react-redux";
import * as actions from "../../../src/actions/producst.action";
import { useSelector } from "react-redux";

// Mock react-redux completo
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

// Mock  CardProduct
jest.mock("../../../src/components/CardProduct.tsx", () => ({
  CardProduct: ({ product }: { product: any }) => (
    <div data-testid="card-product">{product.name}</div>
  ),
}));

// Mock getProductsAction
jest.spyOn(actions, "getProductsAction").mockResolvedValue([
  {
    id: "1",
    name: "Manzana",
    description: "Fruta",
    price: 2000,
    stock: 10,
    category: "frutas",
    image: "url",
  },
  {
    id: "2",
    name: "Banana",
    description: "Fruta amarilla",
    price: 1500,
    stock: 15,
    category: "frutas",
    image: "url",
  },
]);

describe("<Dashboard />", () => {
  beforeEach(() => {
    (reactRedux.useSelector as unknown as jest.Mock).mockImplementation(
      (callback) => callback({ cart: { isLoaded: true } })
    );

    (reactRedux.useSelector as unknown as jest.Mock).mockImplementationOnce(
      (callback) => callback({ cart: { isLoaded: false } })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("debe mostrar título y lista de productos", async () => {
    render(<Dashboard />);

    expect(screen.getByText("Nuestros Productos")).toBeTruthy();

    await waitFor(() => {
      expect(screen.getAllByTestId("card-product").length).toBe(2);
    });

    await waitFor(() => {
      expect(screen.getByText("Manzana")).toBeTruthy();
    });

    await waitFor(() => {
      expect(screen.getByText("Banana")).toBeTruthy();
    });
  });

  it("no debe mostrar productos si cart.isLoaded es false", async () => {
    (useSelector as unknown as jest.Mock).mockImplementationOnce((callback) =>
      callback({ cart: { isLoaded: false } })
    );

    (reactRedux.useSelector as unknown as jest.Mock).mockImplementationOnce(
      (callback) => callback({ cart: { isLoaded: false } })
    );

    render(<Dashboard />);

    expect(screen.getByText("Nuestros Productos")).toBeTruthy();

    await waitFor(() => {
      expect(screen.queryAllByTestId("card-product").length).toBe(0);
    });
  });
});

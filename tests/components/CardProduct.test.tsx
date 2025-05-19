import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { CardProduct } from "../../src/components/CardProduct";
import { BrowserRouter } from "react-router-dom";
import { ProductI } from "../../src/interfaces/Product.interface";

import { alertQuestion, alertShow } from "../../src/utils/alerts";

jest.mock("../../src/actions/producst.action", () => ({
  deleteProductAction: jest.fn(),
}));

jest.mock("../../src/utils/alerts", () => ({
  alertQuestion: jest.fn(),
  alertShow: jest.fn(),
}));

jest.mock("../../src/components/ProductQuantityControl", () => ({
  ProductQuantityControl: () => <div data-testid="quantity-control" />,
}));

const product: ProductI = {
  id: "1",
  name: "Manzana",
  description: "Fruta fresca",
  price: 2000,
  stock: 10,
  category: "frutas",
  image: "http://image.com/apple.jpg",
};

const renderComponent = (props = {}) =>
  render(
    <BrowserRouter>
      <CardProduct product={product} {...props} />
    </BrowserRouter>
  );

describe("Unit Test on <CardProduct />", () => {
  
  it("should render name, description, price, stock and image", () => {
    renderComponent();

    expect(screen.getByText("Manzana").textContent).toBe("Manzana");
    expect(screen.getByText("Fruta fresca").textContent).toBe("Fruta fresca");
    expect(screen.getByTestId("product-price").textContent).toContain("2000");
    expect(screen.getByTestId("product-stock").textContent).toContain("10");
    expect(screen.getByAltText("Manzana").getAttribute("src")).toBe(
      product.image
    );
  });

  it("should display admin buttons if isAdmin is true", () => {
    renderComponent({ isAdmin: true });

    const buttons = screen.getAllByRole("button");
    expect(buttons.length).toBeGreaterThanOrEqual(2); // editar y eliminar
  });

  it("should not display admin buttons if isAdmin is false", () => {
    renderComponent({ isAdmin: false });

    const buttons = screen.queryAllByRole("button");
    expect(buttons.length).toBe(0);
  });

  it("should render ProductQuantityControl if isAdmin is false", () => {
    renderComponent({ isAdmin: false });
    expect(screen.getByTestId("quantity-control").textContent).toBe("");
  });

  it("must remove product if confirmed", async () => {
    const reloadProducts = jest.fn();
    (alertQuestion as jest.Mock).mockResolvedValue(true);
    renderComponent({ reloadProducts });

    const deleteButton = screen.getAllByRole("button")[1];

    fireEvent.click(deleteButton);

    await waitFor(() => expect(alertQuestion).toHaveBeenCalled());
    await waitFor(() =>
      expect(alertShow).toHaveBeenCalledWith("Producto eliminado correctamente")
    );
    await waitFor(() => expect(reloadProducts).toHaveBeenCalled());
  });

  it("should not be deleted if not confirmed", async () => {
    (alertQuestion as jest.Mock).mockResolvedValue(false);
    const reloadProducts = jest.fn();

    renderComponent({ reloadProducts });

    const deleteButton = screen.getAllByRole("button")[1];
    fireEvent.click(deleteButton);

    await waitFor(() => expect(alertQuestion).toHaveBeenCalled());
    expect(reloadProducts).not.toHaveBeenCalled();
  });
});

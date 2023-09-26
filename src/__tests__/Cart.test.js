import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../components/RestaurantMenuPage";
import Header from "../components/Header";
import Cart from "../components/Cart";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA_NAME),
  })
);

it("should Load Restaurant Menu Component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordionHeader = screen.getByText("Biriyani (5)");
  fireEvent.click(accordionHeader);

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(screen.getByText(/Cart 🛒/i)).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart 🛒 1")).toBeInTheDocument();

  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart 🛒 2")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7);

  fireEvent.click(screen.getByRole("button", { name: "Clear cart" }));

  expect(screen.getAllByTestId("foodItems").length).toBe(5);

  expect(
    screen.getByText("Your cart is empty.")
  ).toBeInTheDocument();
});

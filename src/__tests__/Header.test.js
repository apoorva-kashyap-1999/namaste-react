import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../components/Header";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import { BrowserRouter } from "react-router-dom";

// Since we are using Redux Store for Header we need to provde it here as well because its not part of react/jsdom
// same for Link component its coming from react router so for that BrowserRouter
describe("Rendering Header", () => {
  it("Header rendered initially with login button", async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // Async Rendering: If the button is rendered asynchronously (e.g., based on some state or effect),
    //  make sure you wait for it to appear in the DOM before asserting its presence.
    // You should use await with findByRole:
    const button = await screen.findByRole("button");
    const loginButton = await screen.getByText("Login");

    expect(button).toBeInTheDocument();
    expect(loginButton).toHaveTextContent("Login");
  });

  it("Header rendered initially with 0 items in cart", async () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const cartItems = await screen.findByText((content, element)=> {
    //      Check if the element contains the text 'Cart 🛒'
    //     const hasText = element.textContent.includes('Cart 🛒');
    //      Return true if the text is found
    //     return hasText;
    // })

    const cartItems = await screen.findByRole("link", { name: /Cart 🛒/i });

    //regex --> /String/ --> will just match the middle string
    const cart = await screen.findByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
    expect(cart).toBeInTheDocument();
  });

  it("OnClick of login button it should change to logout", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginButton = screen.getByRole("button", { name: "Login" });

    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", { name: "Logout" });

    expect(logoutButton).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Contact from "../components/Contact.js";

describe("Testing Contact Us Component", () => {
    //it <--> test : alias
  it("Should have a heading", () => {
    //Render the component on jsdom
    render(<Contact />);

    //check if it rendered successfully
    const heading = screen.getByRole("heading");

    //assertions
    //@testing-library/jest-dom : for toBeInTheDocument, toHaveTextContent
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Send us your message");
  });

  test("Should have two textboxes", () => {
    //Render the component on jsdom
    render(<Contact />);

    //check if it rendered successfully
    const textboxes = screen.getAllByRole("textbox");

    expect(textboxes).toHaveLength(2);
  });

  test("Should have a button", () => {
    //Render the component on jsdom
    render(<Contact />);

    //two ways to test
    const button = screen.getByRole("button");
    const buttonText = screen.getByText("Submit");

    expect(button).toHaveTextContent("Submit");
    expect(buttonText).toBeInTheDocument();
  });
});

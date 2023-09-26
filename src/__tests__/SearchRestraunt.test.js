import Body from "../components/Body";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResListData.json";
import { BrowserRouter } from "react-router-dom";
import { act } from "react-dom/test-utils";

beforeAll(() => {
  console.log("Before All");
});

beforeEach(() => {
  console.log("Before Each");
});

afterAll(() => {
  console.log("After all");
});

afterEach(() => {
  console.log("After all");
});

//NOTE: while using fetch.setUpdte we should always wrap render in act or use waitFor to wrap assertions
//mocking fetch we used in Body exctly as it is,as it is broswer's fetaure

global.fetch = jest.fn(() => {
  //fetch returns a Promise
  return Promise.resolve({
    json: () => {
      //returns data
      return Promise.resolve(MOCK_DATA);
    },
  });
});

describe("Search/Top Rated Restraunt Feature -- Integration Testing", () => {
  it("Render Body Component with Search button", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(searchBtn).toBeInTheDocument();
    expect(cardsAfterSearch.length).toBe(4);
  });

  it("Wrong search", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const searchBtn = screen.getByRole("button", { name: "Search" });
    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "gggth" } });

    fireEvent.click(searchBtn);
    const noRestaurantsFoundText = screen.getByText((content, element) => {
      return (
        content.match(/No Restaurants found 😥/i) &&
        element.tagName.toLowerCase() === "h1"
      );
    });

    expect(noRestaurantsFoundText).toBeInTheDocument();
  });
  it("Should filter Top Rated Restaurant", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const topRatedBtn = screen.getByRole("button", {
      name: "Top Rated Restaurant",
    });
    fireEvent.click(topRatedBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");
    expect(cardsAfterFilter.length).toBe(13);
  });
});

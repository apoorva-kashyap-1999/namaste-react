import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ResterauntCard from "../components/ResterauntCard";
import { withVegLabel } from "../components/ResterauntCard";
import MOCK_DATA from "../mocks/resCardMock.json";

describe("RestrauntCard", () => {
  it("Rendering RestrauntCard with provided props", () => {
    render(<ResterauntCard {...MOCK_DATA} />);

    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    expect(name).toBeInTheDocument();
  });

  it("Rendering ResterauntCard enhanced with Veg Label (pureVeg=true)", () => {
    // Create a mock component enhanced with the HOC
    const EnhancedResterauntCard = withVegLabel(ResterauntCard);

    // Render the enhanced component with props, including pureVeg=true spureVeg parameter is not present in the mockData
    render(<EnhancedResterauntCard {...MOCK_DATA} pureVeg={true} />);

    // Find the label for "Pure Veg"
    const vegLabel = screen.getByText("Pure Veg");

    // Find the name within the enhanced component
    const name = screen.getByText("Leon's - Burgers & Wings (Leon Grill)");

    // Expect both the label and the name to be in the document
    expect(vegLabel).toBeInTheDocument();
    expect(name).toBeInTheDocument();
  });
});

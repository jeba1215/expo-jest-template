import { render } from "@testing-library/react-native";
import { UseCase1Component } from "../useCase1/UseCase1Component";

describe("UseCase1Component", () => {
  it("renders without crashing", () => {
    const testText = "test";
    const screen = render(<UseCase1Component test={testText} />);
    expect(screen.queryByText(/Title/)).toBeTruthy();
    expect(screen.queryByText(testText)).toBeTruthy();
  });
});

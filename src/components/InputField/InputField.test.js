/**
 * @jest-environment jsdom
 */
import { render } from "@testing-library/react";
import { InputField } from "./InputField";
import "@testing-library/jest-dom";
jest.mock("primereact/inputtext", () => ({
  InputText: ({ value, onChange, ...rest }) => <input data-testid="input-text" value={value} onChange={onChange} {...rest} />,
}));

describe("InputField", () => {
  test("component renders", () => {
    const inputData = {
      input: { name: "Logo" },
      inputName: "name",
    };
    const component = render(<InputField {...inputData} />);
    const input = component.getByTestId("input-text");

    expect(input).toBeInTheDocument();
    expect(input.value).toBe("Logo");
  });
});

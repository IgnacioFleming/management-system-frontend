import "@testing-library/dom";
import { render } from "@testing-library/react";
import AddCostumerManualForm from "./AddCostumerManualForm";
describe("AddCostumerManualForm", () => {
  test("renders form", () => {
    const component = render(<AddCostumerManualForm />);
    console.log(Object.keys(component.container));
  });
});

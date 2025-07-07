import "@testing-library/dom";
import { render, screen } from "@testing-library/react";
import Counter from "./Counter";
import { useCounter } from "../../hooks/useCounter";
import { SalesContext } from "../../contexts/sales";
jest.mock("../../hooks/useCounter", () => ({ useCounter: jest.fn() }));

const mockAddToCount = jest.fn();
const mockSubstractFromCount = jest.fn();
const mockRefreshCount = jest.fn();
const mockAddQuantity = jest.fn();
const mockDecreaseQuantity = jest.fn();
const mockRefreshQuantity = jest.fn();

describe.skip("Counter", () => {
  beforeEach(() => {
    useCounter.mockReturnValue({
      counter: 2,
      addToCount: mockAddToCount,
      substractFromCount: mockSubstractFromCount,
      refreshCount: mockRefreshCount,
    });
    jest.clearAllMocks();
  });
  test("counter renders", () => {
    const product = { id: 1, stock: 10 };
    render(
      <SalesContext.Provider
        value={{
          addQuantity: mockAddQuantity,
          decreaseQuantity: mockDecreaseQuantity,
          refreshQuantity: mockRefreshQuantity,
        }}
      >
        <Counter product={product} />
      </SalesContext.Provider>
    );
    expect(screen.getByTestId("counter-value")).toHaveTextContent("2");
  });
});

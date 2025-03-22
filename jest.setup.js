import "@testing-library/jest-dom";

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
});

jest.mock("sweetalert2", () => ({
  fire: jest.fn(() => Promise.resolve()),
}));
jest.mock("primereact/hooks", () => ({
  ...jest.requireActual("primereact/hooks"),
  useStyle: jest.fn(),
}));

jest.mock("primereact/componentbase", () => ({
  ...jest.requireActual("primereact/componentbase"),
  useHandleStyle: jest.fn(() => ({
    load: jest.fn(),
  })),
}));

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testMatch: ["**/?(*.)+(spec|test).[tj]s?(x)"],
  extensionsToTreatAsEsm: [".jsx"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
};

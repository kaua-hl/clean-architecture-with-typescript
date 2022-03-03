module.exports = {
  root: ["<rootDir>/src"],
  testEnviroment: "node",
  transform: {
    ".+\\.ts$": "ts-jest",
  },
  moduleNameMapper: {
    "@/{.*}": "<rootDir>/src/$1",
  },
};

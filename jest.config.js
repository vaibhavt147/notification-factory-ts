module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "<rootDir>/tests/**/*.test.ts", // any .test.ts file in tests/
    "<rootDir>/src/**/*.test.ts", // if you ever put tests beside src
  ],
  moduleFileExtensions: ["ts", "js", "json"],
};

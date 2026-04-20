const transform = [
  "ts-jest",
  {
    useESM: true,
    tsconfig: "./tsconfig.json",
  },
];

export default {
  preset: "ts-jest/presets/default-esm",
  rootDir: ".",
  testEnvironment: "node",
  clearMocks: true,
  moduleFileExtensions: ["ts", "js", "json"],
  extensionsToTreatAsEsm: [".ts"],
  transform: {
    "^.+\\.ts$": transform,
  },
  moduleNameMapper: {
    "^(\\.{1,2}/.*)\\.js$": "$1",
  },
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/"],
  collectCoverageFrom: ["src/**/*.ts"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/generated/",
    "<rootDir>/src/main.ts",
  ],
};

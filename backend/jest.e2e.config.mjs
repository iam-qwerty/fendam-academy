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
  testMatch: ["<rootDir>/test/**/*.e2e-spec.ts"],
  testPathIgnorePatterns: ["<rootDir>/dist/"],
};

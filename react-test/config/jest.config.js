module.exports = {
  rootDir: '../',
  setupFilesAfterEnv: ["./config/jest.setup.js"],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }],
  },
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sss|styl)$": "<rootDir>/node_modules/jest-css-modules"
  },
  verbose: true,
  coveragePathIgnorePatterns: [ "<rootDir>/test/test-utils.js" ]
};
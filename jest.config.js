module.exports = {
  transform: {
    "^.+\\.[jt]sx?$": `<rootDir>/jest-preprocess.js`,
    "^.+\\.(css)$": [`jest-transform-css`, { 
      modules: true,
      generateScopedName: '[path][local]-[hash:base64:10]'
    }],
  },
  moduleNameMapper: {
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.ts",
    ".+\\.svg": "<rootDir>/__mocks__/svg.tsx"
  },
  testRegex: '/__tests__/.*\\.spec\\.js$',
  testPathIgnorePatterns:  [`node_modules`, `\\.cache`, `<rootDir>.*/public`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby|gatsby-script|gatsby-link)/)`],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}"],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    url: `http://localhost`,
  },
  setupFiles: [`<rootDir>/loadershim.js`],
}

import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'

export default defineConfig({
  env: {
    screenshotsFolder: "cypress/screenshots/actual",
    trashAssetsBeforeRuns: true,
    video: false,
  },
  e2e: {
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
    },
  },
})

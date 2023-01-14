import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';

export default defineConfig({
  env: {
    screenshotsFolder: './cypress/snapshots/actual',
    type: 'actual',
    trashAssetsBeforeRuns: true,
    failSilently: false,
    video: false
  },
  e2e: {
    video: false,
    baseUrl: "http://localhost:8000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config)
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
  },
});

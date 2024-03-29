import { defineConfig } from "cypress";
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin';
import cypressTerminalReport from 'cypress-terminal-report/src/installLogsPrinter'

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
      cypressTerminalReport(on)
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    },
  },
});

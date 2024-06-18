import { defineConfig } from "cypress"
import getCompareSnapshotsPlugin from 'cypress-visual-regression/dist/plugin'
import { pa11y, lighthouse, prepareAudit } from '@appsfactory/cypress-audit'
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
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/audit/**/*.cy.js"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      getCompareSnapshotsPlugin(on, config)
      cypressTerminalReport(on)
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
      on('task', {
        pa11y: pa11y(),
        lighthouse: lighthouse(),
        log(message) {
          console.log(message)
          return null
        }
      })
    },
  },
});

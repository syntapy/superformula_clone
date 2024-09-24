import { defineConfig } from "cypress"
import { configureVisualRegression } from 'cypress-visual-regression'
import { pa11y, lighthouse, prepareAudit } from '@appsfactory/cypress-audit'
import cypressTerminalReport from 'cypress-terminal-report/src/installLogsPrinter'
import path from 'path'
import fs from 'fs'


export default defineConfig({
  env: {
    visualRegressionGenerateDiff: 'always',
    type: 'regression',
    trashAssetsBeforeRuns: true,
    failSilently: false,
    video: false
  },
  e2e: {
    screenshotsFolder: './cypress/snapshots/actual',
    video: false,
    baseUrl: "http://localhost:8000",
    specPattern: ["cypress/e2e/**/*.cy.js", "cypress/audit/**/*.cy.js"],
    setupNodeEvents(on, config) {
      configureVisualRegression(on)
      cypressTerminalReport(on)
      on('before:browser:launch', (browser = {}, launchOptions) => {
        prepareAudit(launchOptions)
      })
      on('task', {
        pa11y: pa11y(),
        lighthouse: lighthouse((result) => {
          const htmlReport = result.report

          if (typeof htmlReport !== 'string') {
            console.error('No or too many HTML report(s) found')
            return
          }

          const reportsDir = path.join(process.cwd(), 'cypress/')

          if (!fs.existsSync(reportsDir)) {
            fs.mkdirSync(reportsDir)
          }

          const url = new URL(result.lhr.finalDisplayedUrl)
          const sanitizedUrlPath = url.pathname.replace(/\//g, 'report')

          fs.writeFileSync(`${reportsDir}/${sanitizedUrlPath}.html`, htmlReport)
        }),
        log(message) {
          console.log(message)
          return null
        }
      })
    },
  },
})

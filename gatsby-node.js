const webpack = require('webpack');
const cypressWebpackPreprocessor = require('cypress-webpack-preprocessor');

module.exports = (on, config) => {
  // Add the webpack preprocessor
  on('file:preprocessor', cypressWebpackPreprocessor);

  // Modify the webpack configuration
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--auto-open-devtools-for-tabs');
      return launchOptions;
    }

    if (browser.name === 'firefox') {
      launchOptions.args.push('--devtools');
      return launchOptions;
    }
  });
};

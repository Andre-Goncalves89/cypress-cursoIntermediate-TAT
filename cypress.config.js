const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    pageLoadTimeout: 180000
    //defaultCommandTimeout: 180000
  },
  fixturesFolder: false,
  video: false,
})


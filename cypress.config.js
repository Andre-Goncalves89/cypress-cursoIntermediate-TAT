const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    pageLoadTimeout: 3000000
    //defaultCommandTimeout: 180000
  },
  fixturesFolder: false,
  video: false,
})


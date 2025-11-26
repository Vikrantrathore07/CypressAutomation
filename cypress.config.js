const { defineConfig } = require("cypress");
const fs = require('fs');

module.exports = defineConfig({

  video: true, // Enable video recording
  screenshotOnRunFailure: true, // Take screenshots on failure
  videoCompression: 32, // Reduce video size
  videoUploadOnPasses: false, // Only keep videos for failed tests

  reporter: "cypress-mochawesome-reporter",  //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on); //for html reports

      on('task', {
        readOtp() {
          return fs.readFileSync('otp.txt', 'utf8');
        }
      });

      // Example: Delete video if test passes
      on('after:spec', (spec, results) => {
        if (results && results.video && results.stats.failures === 0) {
          fs.unlinkSync(results.video);
        }
      });

      return config;
      // implement node event listeners here
    },
  },
});

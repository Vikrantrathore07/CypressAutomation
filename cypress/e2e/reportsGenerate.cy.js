// const { setupHooks } = require("cypress/mount-utils")

// 1)install cypress-mochawesome-reporter
// -------npm install cypress-mochawesome-reporter --save-dev

// 2)change cypress reporter & setup Hooks
// -------Edit {defineConfig } = require("cypress");

// const { defineConfig } = require("cypress");
// module.exports = defineConfig({
//     reporter: "cypress-mochawesome-reporter",
//     e2e: {
//         setupNodeEvents(on, config) {
//         require("cypress-mochawesome-reporter/plugin")(on);
//         setupHooks(on);
//         },
//     },
//     });
// 3)add import in cypress/support/e2e.js
// import "cypress-mochawesome-reporter/register";

// 4)run cypress with command
// -------npx cypress run --spec cypress/e2e/reportsGenerate.cy.js

describe("Reports Generation Test Suite", () => {
  before(() => {
    // Runs once before all tests in the block
    cy.log("Starting Reports Generation Test Suite");
  });

  beforeEach(() => {
    // Runs before each test in the block
    cy.log("Starting a new test");
  });

  it("should perform a sample test and generate a report", () => {
    // Sample test case
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");                                
  });

});

const { setupHooks } = require("cypress/mount-utils");

//name of the test suite 
describe('My First Test', () => {

    //mutltiple blocks
    it('verify positive title', () => {
        //step 1
        cy.visit("https://nhaiuat.dic.org.in/login");
        cy.title().should('eq', 'NHAI Datalake 3.0');
    })

    it('verify Title negative test', () => {
        //step 2
        cy.visit("https://nhaiuat.dic.org.in/login");
        cy.title().should('eq', 'NHAI UAT');
    })
})

// testSuite--->TestCase-->Test Steps

// Spec File(cy.js) ----->describe blocks(test suites)---> it blocks (test);
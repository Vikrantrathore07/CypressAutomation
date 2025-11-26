import 'cypress-iframe';  //import this line in cypress/support/e2e.js file
describe("handling frames in cypress", () => {
    //   it("should switch to the iframe and verify content", () => {
    //     cy.visit("https://the-internet.herokuapp.com/iframe");
    //     cy.get("iframe").then(($iframe) => {
    //       const body = $iframe.contents().find("body");
    //       cy.wrap(body).should("contain.text", "Your content goes here");
    //     });
    //   });

    // it.only("should access iframe and verify content", () => {
    //   cy.visit("https://the-internet.herokuapp.com/iframe");
    //   cy.get("iframe").its("0.contentDocument.body").then(cy.wrap).within(() => {
    //     cy.get("p").should("have.text", "Your content goes here");
    //   });
    // });

    it('approach1', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        const iframe = cy.get('iframe')
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome to Cypress Automation {cmd+a}");
        //bold text select Ctrl +A
        cy.get('[aria-label="Bold"]').click();
    });

    it.only('approach1 -by using custom command', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        //use custom command
        cy.getIframeBody('iframe').clear().type("Welcome to Cypress Automation {cmd+a}");
        //bold text select Ctrl +A
        cy.get('[aria-label="Bold"]').click();
    });

    it.only('approach1 -by using cypress-iframe plugin', () => {
        cy.visit("https://the-internet.herokuapp.com/iframe");
        //use cypress-iframe plugin install first:---------- "npm install -D cypress-iframe".thne you acces frame loaded method
        //import 'cypress-iframe';  //import this line in cypress/support/e2e.js file
        //locator is present in frameLoaded method
        cy.frameLoaded('iframe');
        cy.iframe().clear().type("Welcome to Cypress Automation {cmd+a}");
        //bold text select Ctrl +A
        cy.get('[aria-label="Bold"]').click();
    });


});

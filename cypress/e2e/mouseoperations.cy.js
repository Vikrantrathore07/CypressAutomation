import 'cypress-iframe';
describe("Mouse Operations in Cypress", () => {
    //for drag and drop operation we need to install a plugin
    require('@4tw/cypress-drag-drop');

    it('mouseHover', () => {
        cy.visit("https://demo.opencart.com/");

        cy.get("body>main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('not.be.visible');

        cy.get("#myElement").trigger("mouseover").click();

        cy.get("body>main:nth-child(3) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(3) > a:nth-child(1)").should('be.visible');
    });

    it('rightClick', () => {
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        
        // approach 1
        cy.get(".context-menu-one.btn.btn-neutral").trigger("contextmenu");
        cy.get(".context-menu-icon-copy").should('be.visible');

        // approach 2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick();
        cy.get(".context-menu-icon-copy").should('be.visible');
    });

    it('doubleClick', () => {
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondbclick3");
        cy.frameLoaded("#iframeResult");  //Load the iframe and also import cypress-iframe package
        //Approach 1 - using trigger
        cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").trigger('dblclick');
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');

        //Approach 2 - using dblclick()
        cy.iframe("#iframeResult").find("[ondblclick='myFunction()']").dblclick();
        cy.iframe("#iframeResult").find("#field2").should('have.value', 'Hello World!');

    });

    it('dragAndDrop', () => {
        //drag and drop plugin is required for this operation
        // npm install --save-dev @4tw/cypress-drag-drop 
        //require('@4tw/cypress-drag-drop') in cypress/support/e2e.js file
        cy.visit("https://www.dhtmlgoodies.com/scripts/drag-drip-custom/demo-drag-drop-3.html");
        cy.get("#box6").should('have.text', 'Washington');
        cy.get("#box106").should('have.text', 'United States');
        //force true is used to avoid any overlapping issues
        cy.get("#box6").drag("#box106", {force: true});
        cy.get("#box106").should('have.text', 'Washington');
    });
    
    it('scrolling', () => {
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");
        // cy.get("#footer").scrollIntoView();
        // cy.get("div.footer").should('be.visible');
        // cy.wait(1000);
        // cy.get("h2").contains('Flags of the World').scrollIntoView({duration: 2000});

        //india flag visibility check
        cy.get(':nth-child(1)> tbody > :nth-child(86) > :nth-child(1) > img').scrollIntoView({duration: 2000});
        cy.get(':nth-child(1)> tbody > :nth-child(86) > :nth-child(1) > img').should('be.visible');

        cy.get(':nth-child(1) >tbody > :nth-child(4) > :nth-child(1) > img').scrollIntoView({duration: 2000});
        cy.get(':nth-child(1) >tbody > :nth-child(4) > :nth-child(1) > img').should('be.visible');

        cy.get("#footer").scrollIntoView();
        cy.get("div.footer").should('be.visible');
    });

    
});
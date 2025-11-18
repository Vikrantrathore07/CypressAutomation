describe("Tab Handling in Cypress", () => {
  it.skip("should handle new tab opening", () => {
    cy.visit("https://the-internet.herokuapp.com/windows");
    //cypress cannot handle multiple tabs, so we remove the target attribute to open in the same tab
    cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click();
    cy.url().should("include", "/windows/new");
    cy.wait(1000); //just to visualize the operations
    cy.go("back");  //back to the original page
    cy.get("h3").should("have.text", "Opening a new window");
 });

    it.only("href attribute verification", () => {
      cy.visit("https://the-internet.herokuapp.com/windows");
      cy.get("a[href='/windows/new']")
        .should("have.attr", "href", "/windows/new")
        .and("contain.text", "Click Here");
    });

    it.only("href attribute verification", () => {
        cy.get('.example a').then((link) => {
          const href = link.prop('href');
          expect(href).to.eq('https://the-internet.herokuapp.com/windows/new');
        });
    });
 
});
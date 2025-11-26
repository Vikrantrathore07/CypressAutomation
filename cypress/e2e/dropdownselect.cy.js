describe("Dropdown Select", () => {
  //skipping this test for demonstration purposes
  it.skip("dropdown with select", () => {
    // Test code goes here
    cy.visit("https://example.com/dropdown"); // Replace with your URL
    cy.get("#dropdownMenu").select("Italy"); // Replace with your dropdown selector and option value
    cy.get("#dropdownMenu").should("have.value", "Italy"); // Assertion to verify the selected value

  });

  it("dropdown without select search option in dropdown", () => {
    // Test code goes here
    cy.visit("https://example.com/dropdown"); // Replace with your URL
    cy.get("#dropdownMenu").click();
    cy.get("#dropdownMenu").type("Italy{enter}"); // Typing the option directly

    cy.get("#dropdownMenu").should("have.value", "Italy"); // Assertion to verify the selected value

  });

  it("auto complete", () => {
    // Test code goes here
    cy.visit("https://example.com/dropdown"); // Replace with your URL
    cy.get("#dropdownMenu").click();
    cy.get("#dropdownMenu").type("Italy");
    cy.get("#dropdownMenu").should("have.text", "Italy"); // Assertion to verify the selected value

  });

  it("auto suggest", () => {
    // Test code goes here
    cy.visit("https://example.com/dropdown"); // Replace with your URL
    cy.get("#dropdownMenu").click();
    cy.get("#dropdownMenu").type("Italy");
    cy.get("#dropdownMenu").should("have.text", "Italy"); // Assertion to verify the selected value

  });

  it("auto suggest", () => {
    // Test code goes here
    cy.visit("https://www.wikipedia.org.in"); // Replace with your URL
    cy.get("#searchInput").type("Delhi");
    cy.get("#searchInput").contains("Delhi University").click();

  });

  it("dynamic dropdown", () => {
    //jquery function is used
    cy.visit("https://www.google.com"); // Replace with your URL
    cy.get("#input[name='q']").type("cypress automation");
    cy.wait(2000); //wait for 2 seconds to load suggestions
    cy.get('div.wM6W7d>span').should('have.length.greaterThan', 0); //Assertion to verify suggestions are displayed
    cy.get('div.wM6W7d>span').each(($el, index, $list) => {
      if ($el.text() === "cypress automation tutorial") {
        cy.wrap($el).click();
      }
    });
    cy.get("input[name='q']").should("have.value", "cypress automation tutorial"); // Assertion to verify the selected value

  });


  //   afterEach(() => {
  //     // Code to run after each test
  //   });

  //   after(() => {
  //     // Code to run after all tests
  //   });


});
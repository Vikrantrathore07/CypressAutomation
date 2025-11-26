
describe('Xpath', () => {
    it('test1', () => {
        cy.visit("https://nhaiuat.dic.org.in/login");
        // cy.xpath("//input[@id='search_query_top']").type("T-shirts");
        // cy.xpath("//button[@name='submit']").click();
        //npm install -D cypress-xpath
        // --------------------------------------------------------------------------
        // Absolute Xpath -------------> /html/body/div/main/div/input
        // Relative Xpath -------------> //tagname[@attributename='value']
        // By Attribute --------------> //tagname[@attributename='value']
        // By Text -------------------> //tagname[text()='value']
        // By Contains --------------> //tagname[contains(@attributename,'partialvalue')]
        cy.xpath("//div[@class='lighter']").should('have.length', 7).contains("NHAI Datalake 3.0") //Assertion
    })
})
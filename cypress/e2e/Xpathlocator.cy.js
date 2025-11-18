
describe('Xpath',() =>{
    it('test1',() =>{
        cy.visit("https://nhaiuat.dic.org.in/login");
        // cy.xpath("//input[@id='search_query_top']").type("T-shirts");
        // cy.xpath("//button[@name='submit']").click();
        cy.xpath("//div[@class='lighter']").should ('have.length',7).contains("NHAI Datalake 3.0") //Assertion
    })
})
//by default cypress support css selectors and XPath locator(install plugin)
// cy.get(Locators)

const { describe } = require("mocha");

// css ROOT_SELECTOR
// ----------------
// tag Id              -----------> #id                          or  tag#id
// tag class           -----------> .class                       or  tag.class
// tag attribute       -----------> [attribute='value']          or  tag[attribute='value']
// tag class attribute -----------> .class[attribute='value']    or  tag.class[attribute='value']
// Note:--Tag is optional
describe('CSS Locators' , () =>{

    it('cssSelectors', () =>{
     cy.visit("https://nhaiuat.dic.org.in/login");
     cy.get("#search_query_top").type("T-shirts");
     cy.get("[name='submit']").click();
     cy.get(".lighter").contains("T-shirts")  //Assertion
    })
})

// Type of Cypress Assertions 
// 1)Implicit Assertions

// a)should  
// b)and 
// examples:-  eq,contain , include ,exist , have.length, have.value these are used and for negative testing not.eq, not.contain, not.include
// 2)Explicit Assertions
// a)expect     bdd approach of framework
// b)assert     tdd approach of framework
// -----------------------------------------------------------------------
// Common Assertion Types
// 1)Visibility: should('be.visible')
// 2)Existence: should('exist')
// 3)Equality: should('eq', 'expectedValue')
// 4)Text: should('contain', 'text') or should('have.text', 'exact text')
// 5)CSS Class: should('have.class', 'active')
// 6)Attribute: should('have.attr', 'href', '/home')
// 7)Length: should('have.length', 6) (useful for OTP fields)
// 8)URL: cy.url().should('include', '/dashboard')


describe('Assertions in Cypress', () => {

    it('Implicit Assertions', () => {

        cy.visit("https://nhaiuat.dic.org.in/login");

        // cy.url().should('include','dic.org.in').should('eq','https://nhaiuat.dic.org.in/login').should('contain', 'dic');

        cy.url().should('include', 'dic.org.in').and('eq', 'https://nhaiuat.dic.org.in/login');
        cy.url().should('contain', 'dic');
        cy.url().should('not.contain', 'dic');

        // cy.title().should('include','Datalake').and('eq','NHAI Datalake 3.0').and('contain', 'NHAI');

        cy.get('.login-logo').should('be.visible').and('have.attr', 'src').and('include', 'logo');

        //capture links all the page

        cy.xpath("//a").should('have.length', 7).and('not.have.length', 8);
        cy.get("input[placeholder='Username']").should('have.value', 'Admin').and('not.have.value', 'admin123');

    })


    it('Explicit Assertions', () => {

        cy.visit("https://nhaiuat.dic.org.in/login");
        // cy.get("input[placeholder='Username']").then( (e) => {
        //     //BDD style
        //     expect(e).to.have.value('Admin')
        //     expect(e).to.not.have.value('admin123')

        //     //TDD style
        //     assert.equal(e.val(),'Admin')
        //     assert.notEqual(e.val(),'admin123')
        // })

        cy.get("input[placeholder='username']").type("Admin"),
            cy.get("input[placeholder='password']").type("Admin"),
            cy.get("button[type='submit']").click();


    })
}
)

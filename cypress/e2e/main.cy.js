describe ('main test suite',() => {

    it('main test case',() => {
        
        cy.visit('https://nhaiuat.dic.org.in/login');
        cy.get("//input[@id='_r_1_']").type('8448744700');

        

    });
});
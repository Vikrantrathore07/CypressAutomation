describe('Web Table Handling', () => {

    beforeEach('login', () =>{
        cy.visit('https://demo.opencart.com/admin/index.php');
        cy.get('#input-username').type('demo');
        cy.get('#input-password').type('demo');
        cy.get('button[type="submit"]').click();
    })
    it('check number rows and columns', () => {
        cy.get('table').find('tr').should('have.length', 5);
        cy.get('table').find('tr').first().find('td').should('have.length', 3);
    });

    it('check cell data from specific row & column', () => {
        cy.get('table').find('tr').eq(1).find('td').eq(0).should('have.text', 'John');
    });

    it('Read all the row & columns data in the page', () => {
        cy.get('table').find('tr').each(($row) => {
            cy.wrap($row).find('td').each(($cell) => {
                cy.wrap($cell).invoke('text').then((text) => {
                    cy.log(text);
                });
            });
        });
    });
    it('pagination', () => {
        cy.get('table').find('tr').should('have.length', 5);
        cy.get('table').find('tr').first().find('td').should('have.length', 3);
    });
});
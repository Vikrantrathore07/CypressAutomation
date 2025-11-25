// 4 types of hooks are there
// before()   :- runs once before all tests in the block
// beforeEach() :- runs before each test in the block 
// after() :- runs once after all tests in the block 
// afterEach() :- runs after each test in the block

describe('MyTestSuite', () => {

    before(() =>{

        cy.log("****** Launch application *******");

    });

    after(()  => {

        cy.log("****** Close application *******");

    });

    beforeEach(() => {

        cy.log("****** Login *******");
    });

    afterEach(() => {

        cy.log("****** Logout *******");
    });
// ---------------------------------------------------------------    
    it('search', () => {

        cy.log('search test executed');

    });

    it('advanced search', () => {

        cy.log('advanced search test executed');

    });
    
    it('listing products', () => {

        cy.log('listing products test executed');


    });   

    // it('viewing a product', () => {});  

    // it('checking out', () => {});

    // it('payment', () => {});

    // it('logout', () => {});

    // it('login', () => {});

    // it('register', () => {});

    // it('deleting account', () => {});

    // it('subscribing to newsletter', () => {});

    // it('contacting support', () => {});

    // it('updating profile', () => {});

    // it('changing password', () => {});

    // it('applying discount code', () => {});

    // it('tracking order', () => {});

    // it('adding to wishlist', () => {});

    // it('removing from cart', () => {});

    // it('filtering products', () => {});

    // it('sorting products', () => {});

    // it('writing a review', () => {});

    // it('reading reviews', () => {});

    // it('checking stock availability', () => {});

    // it('viewing order history', () => {});

    // it('reordering a product', () => {});

    // it('downloading invoice', () => {});

    // it('changing shipping address', () => {});

    // it('selecting payment method', () => {});

    // it('applying gift card', () => {});


});
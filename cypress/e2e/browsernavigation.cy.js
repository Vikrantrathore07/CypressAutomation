describe('mysuite', () => {

    // browser (back, forward, reload). 
    // Navigate Back
    // cy.go('back'); // Goes to the previous page in browser histor

    // Navigate Forward
    // cy.go('forward'); // Goes to the next page in browser history

    // Reload the Page
    // cy.reload(); // Reloads the current page

    // Reload Without Cache
    // cy.reload(true); // Forces reload without using cache

    it('mysuite', () => {
        cy.visit("https://demo.opencart.com/");
        cy.titie().should('eq', 'Your Store');  //home page title

        cy.get("li:nth-child(7) a:nth-child(1)").click(); //click on register link
        cy.get("div[id='content'] h1").should('have.text', 'Register Account'); //register page title

        cy.go('back'); //navigate back to home page
        cy.title().should('eq', 'Your Store');  //home page title

        cy.go('forward'); //navigate forward to register page
        cy.get("div[id='content'] h1").should('have.text', 'Register Account'); //register page title   

        cy.go(-1); //navigate back to home page
        cy.title().should('eq', 'Your Store');  //home page title

        cy.go(1); //navigate forward to register page
        cy.get("div[id='content'] h1").should('have.text', 'Register Account'); //register page title

        cy.reload(); //reload register page

        cy.get("div[id='content'] h1").should('have.text', 'Register Account'); //register page title

        cy.visit("https://demo.opencart.com/"); //navigate to home page

        cy.title().should('eq', 'Your Store');  //home page title



    });






    // it('navigate browser', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });
    // });

    // it('navigate back and forth', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.get('.ico-register').click();

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    //     cy.go('back');

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    //     cy.go('forward');

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    // }); 

    // it('reload browser', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.get('.ico-register').click();

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    //     cy.reload();

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    // }); 

    // it('navigate to specific url', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.get('.ico-register').click();

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    // }); 

    // it('handle multiple tabs', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.get('.ico-register').then((e) => {

    //         const url = e.prop('href');

    //         cy.log('URL is: ' + url);

    //         cy.visit(url);

    //     });

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    // }); 

    // it('handle multiple windows', () => {

    //     cy.visit('https://demo.nopcommerce.com/');

    //     cy.get('.ico-register').then((e) => {

    //         const url = e.prop('href');

    //         cy.log('URL is: ' + url);

    //         cy.visit(url);

    //     });

    //     cy.title().then((title) => {

    //         cy.log('Title is: ' + title);

    //     });

    // }); 

});
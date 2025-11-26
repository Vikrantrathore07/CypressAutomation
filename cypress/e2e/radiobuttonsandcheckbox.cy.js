describe('Radio Buttons and Checkboxes', () => {

    // it('Radio Buttons', () => {
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //     // Selecting radio button by ID
    //     cy.get('#male').check().should('be.checked');
    //     cy.get('#female').check().should('be.checked');

    //     // Verify that only one radio button is selected at a time
    //     cy.get('#male').should('not.be.checked');
    // });

    // it('Checkboxes', () => {
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //     // Selecting checkboxes by ID
    //     cy.get('#monday').check().should('be.checked');
    //     cy.get('#tuesday').check().should('be.checked');

    //     // Unchecking a checkbox
    //     cy.get('#monday').uncheck().should('not.be.checked');

    //     // Selecting multiple checkboxes using a common attribute
    //     cy.get("input[type='checkbox']").check(['wednesday', 'thursday']).should('be.checked');
    // });

    // it('Multiple Checkboxes Selection', () => {
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //     // Selecting multiple checkboxes using a common attribute
    //     cy.get("input[type='checkbox']").check(['wednesday', 'thursday']).should('be.checked');
    // });

    // it('Checkboxes with Loop', () => {
    //     cy.visit("https://itera-qa.azurewebsites.net/home/automation");

    //     // Loop through all checkboxes and select them
    //     cy.get("input[type='checkbox']").each((checkbox) => {
    //         cy.wrap(checkbox).check().should('be.checked');
    //     });
    // });
    it('checking radio buttons', () => {
        cy.visit("https://itera-qa.azurewebsites.net/home/automation");

        // visibility of radio button by ID
        cy.get('#male').check().should('be.visible');
        cy.get('#female').check().should('be.visible');

        // Verify that only one radio button is selected at a time
        cy.get('#male').check().should('be.checked');
        cy.get('#female').should('not.be.checked');
        // Verify that only one radio button is selected at a time
        cy.get('#female').check().should('be.checked');
        cy.get('#male').should('not.be.checked');
    });


    describe('Checkboxes', () => {

        it('checking checkboxes', () => {
            cy.visit("https://itera-qa.azurewebsites.net/home/automation");

            // visibility of checkboxes by ID
            cy.get('#monday').check().should('be.visible');
            cy.get('#tuesday').check().should('be.visible');
            cy.get('#wednesday').check().should('be.visible');
            cy.get('#thursday').check().should('be.visible');
            cy.get('#friday').check().should('be.visible');

            // Unchecking a checkbox
            cy.get('#monday').uncheck().should('not.be.checked');
            // Selecting multiple checkboxes using a common attribute
            cy.get("input[type='checkbox']").check(['wednesday', 'thursday']).should('be.checked');

            //selecting all the checkboxes
            cy.get("input[type='checkbox']").check().should('be.checked');

            //deselecting all the checkboxes
            cy.get("input[type='checkbox']").uncheck().should('not.be.checked');

            // Loop through all checkboxes and select them
            cy.get("input[type='checkbox']").each((checkbox) => {
                cy.wrap(checkbox).check().should('be.checked');
            });

            //selecting specific checkboxes using loop
            cy.get("input[type='checkbox']").each((checkbox) => {
                const value = checkbox.val();
                if (value === 'monday' || value === 'friday') {
                    cy.wrap(checkbox).check().should('be.checked');
                }
            });

            //select first checkbox
            cy.get("input[type='checkbox']").first().check().should('be.checked');

            //select last checkbox
            cy.get("input[type='checkbox']").last().check().should('be.checked');

        });
    })
})
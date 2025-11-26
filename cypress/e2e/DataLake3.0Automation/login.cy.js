describe('Mobile Login with OTP', () => {

    it('should log in successfully using OTP on mobile view', () => {

        //visit the login page
        cy.visit("https://nhaiuat.dic.org.in/"); // Replace with actual URL
        cy.wait(3000);

        //Enter your mobile number
        cy.get("#_r_1_").first().type("8295188429");
        // cy.contains("verify otp").click();

        cy.wait(2000);

        //Click on the Send OTP button
        cy.get("[type='submit']").click();

        //intercept the OTP API call and mock the response(optional)
        cy.wait(3000);
        // cy.intercept('POST', '/api/send-otp', {
        //     statusCode: 200,
        //     body: { success: true, message: 'OTP sent successfully' , otp: '84436' }       //mock response 
        // }).as('sendOtp');

        //wait for the OTP API call to complete
        // cy.wait('@sendOtp');
        //    cy.wait(3000);


        // Step 3: Fetch OTP from API
        // cy.request('GET', 'https://api.example.com/get-otp?mobile=91829518429')
        //   .then((response) => {
        //     const otp = response.body.otp; // Assume API returns { otp: "123456"


        //  Fetch OTP dynamically (mocked here)
        // In real scenario, use cy.request() to get OTP from API or DB
        const otp = '84436'; // Replace with dynamic OTP if available

        // Step 4: Enter OTP into multiple fields
        cy.get("input[type='tel']").should('have.length', 5)
            .each((input, index) => {
                cy.wrap(input).type(otp[index]);
            });

        // cy.contains('Verify OTP').click();

        //click on the verify otp button
        cy.get("[type='submit']").click();
        cy.wait(3000);

        // Step 6: Assert successful login (check dashboard or success message)
        cy.url().should('include', '/dashboard'); // Adjust based on actual redirect
        cy.contains('Welcome').should('be.visible'); // Example assertion


    });

});
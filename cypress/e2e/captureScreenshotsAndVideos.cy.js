//to run specific file: npx cypress run --spec "cypress/e2e/captureScreenshotsAndVideos.cy.js"
describe('Capture Screenshots and Videos', () => {

it('capture screenshots & videos', () => {
    cy.visit("https://demo.opencart.com/");

    cy.screenshot('homepage'); // Capture screenshot of the homepage
    cy.wait(2000); // Wait for 2 seconds
    cy.get("img[title='Your Store']").screenshot('logo'); // Capture screenshot of the logo element 

    cy.get('a:contains("Desktops")').click();
});


it('automatically capure screenshots and video on failure', () => {
//only when execute through cli
    cy.visit("https://demo.opencart.com/");

    // cy.get('a:contains("NonExistentLink")').click(); // This will fail and trigger screenshot and video capture
    cy.get("li:nth-child(7) a:nth-child(1)").click(); //click on camera
    cy.get("div[id='content'] h1").should('have.text','Tablets'); //Tablets page title

});


// it('should capture screenshot of the page', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('example-page'); // Capture screenshot with a custom name
//   });

//   it('should capture screenshot of a specific element', () => {
//     cy.visit('https://example.cypress.io');
//     cy.get('.banner').screenshot('banner-element'); // Capture screenshot of a specific element
//   });

//   it('should record video of the test run', () => {
//     // Video recording is enabled by default in Cypress when running tests via CLI
//     cy.visit('https://example.cypress.io');
//     cy.get('.home-list').should('be.visible');
//   });


//   it('should capture screenshot on test failure', () => {
//     cy.visit('https://example.cypress.io');
//     cy.get('.non-existent-element').should('be.visible'); // This will fail and trigger screenshot capture
//   });

//   it('should capture screenshot after each test', () => {
//     cy.visit('https://example.cypress.io');
//     cy.get('.home-list').should('be.visible');
//   });

//   it('should capture full page screenshot', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('full-page', { capture: 'fullPage' }); // Capture full page screenshot
//   });

//   it('should capture screenshot with custom options', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-options', { blackout: ['.banner'], scale: false }); // Custom options
//   });


//   it('should capture screenshot of viewport', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('viewport-only', { capture: 'viewport' }); // Capture only the viewport
//   });


//   it('should capture screenshot of a specific area', () => {
//     cy.visit('https://example.cypress.io');
//     cy.get('.home-list').screenshot('specific-area'); // Capture screenshot of a specific area
//   });   


//   it('should capture screenshot with delay', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('delayed-screenshot', { delay: 1000 }); // Capture screenshot after a delay
//   });

//   it('should capture screenshot in grayscale', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('grayscale-screenshot', { grayscale: true }); // Capture screenshot in grayscale
//   });

//   it('should capture screenshot with padding', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('padded-screenshot', { padding: 10 }); // Capture screenshot with padding
//   });

//   it('should capture screenshot with transparency', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('transparent-screenshot', { scale: true }); // Capture screenshot with transparency
//   });

//   it('should capture screenshot with custom file format', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-format', { fileFormat: 'png' }); // Capture screenshot with custom file format
//   });       

//   it('should capture screenshot with custom quality', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-quality', { quality: 80 }); // Capture screenshot with custom quality
//   });

//   it('should capture screenshot with custom background', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-background', { background: '#ffffff' }); // Capture screenshot with custom background
//   });

//   it('should capture screenshot with custom filename', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-filename'); // Capture screenshot with custom filename
//   });

//   it('should capture screenshot with custom dimensions', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-dimensions', { width: 800, height: 600 }); // Capture screenshot with custom dimensions
//   });

//   it('should capture screenshot with custom scale', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-scale', { scale: true }); // Capture screenshot with custom scale
//   });

//   it('should capture screenshot with custom clip', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-clip', { clip: { x: 0, y: 0, width: 400, height: 300 } }); // Capture screenshot with custom clip
//   });

//   it('should capture screenshot with custom timeout', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-timeout', { timeout: 5000 }); // Capture screenshot with custom timeout
//   } );

//   it('should capture screenshot with custom logging', () => {                                   
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-logging', { log: true }); // Capture screenshot with custom logging
//   });

//   it('should capture screenshot with custom overwrite', () => {
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-overwrite', { overwrite: true }); // Capture screenshot with custom overwrite
//   });   


//   it('should capture screenshot with custom scale option', () => {  
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-scale-option', { scale: false }); // Capture screenshot with custom scale option
//   });   

//   it('should capture screenshot with custom blackout option', () => {  
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-blackout-option', { blackout: ['.home-list'] }); // Capture screenshot with custom blackout option
//   });


//   it('should capture screenshot with custom capture option', () => {  
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-capture-option', { capture: 'runner' }); // Capture screenshot with custom capture option
//   });

//   it('should capture screenshot with custom disableTimersAndAnimations option', () => {  
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-disable-timers-animations', { disableTimersAndAnimations: true }); // Capture screenshot with custom disableTimersAndAnimations option
//   });

//   it('should capture screenshot with custom scale and blackout options', () => {  
//     cy.visit('https://example.cypress.io');
//     cy.screenshot('custom-scale-blackout', { scale: false, blackout: ['.banner'] }); // Capture screenshot with custom scale and blackout options
//   });
});
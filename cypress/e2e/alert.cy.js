// 1)JavaScript Alert:It will have some text and an OK button
describe.skip("Alert Handling in Cypress", () => {
  it("should handle JavaScript alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsAlert()']").click();
    //cypress event to handle window:alert  -- offical doc: https://docs.cypress.io/api/events/catalog-of-events#App-Events
    cy.on("window:alert", (str) => {
      expect(str).to.contains("This is a JavaScript alert");  
    //   expect(str).to.equal("This is a JavaScript alert");
    // Assertion to verify the alert text
    }).then(() => {
    cy.get("#result").should("have.text", "You successfully clicked an alert");
    });
  });
});

// 2)Javascript confirm alert: It will have some text and OK and Cancel buttons

describe.skip("Confirm Alert Handling in Cypress", () => {
  it("should handle JavaScript confirm alerts", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.contains("This is a JavaScript confirm");
    }).then(() => {
      cy.get("#result").should("have.text", "You clicked: Ok");

    });
    // To handle Cancel button
    // cy.get("button[onclick='jsConfirm()']").click();
    cy.on("window:confirm", (str) => {
      expect(str).to.contains("This is a JavaScript confirm");
    }).then(() => {
      cy.get("#result").should("have.text", "You clicked: Cancel");
      
    });
  });
});

// 3)Javascript prompt alert: It will have some text, a text box to enter value and OK and Cancel buttons

describe("Prompt Alert Handling in Cypress", () => {
    it("should handle JavaScript prompt alerts", () => {
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
        const promptInput = "Cypress Test";
        cy.window().then((win) => {
        cy.stub(win, "prompt").returns(promptInput);
        cy.get("button[onclick='jsPrompt()']").click();
        });
        cy.get("#result").should("have.text", `You entered: ${promptInput}`);
        cy.log("Entered text in prompt alert and clicked OK");
    
        // To handle Cancel button
        
        // cy.window().then((win) => {
        // cy.stub(win, "prompt").returns(null);
        // cy.get("button[onclick='jsPrompt()']").click();
        // });
        // cy.get("#result").should("have.text", "You entered: null");
        // cy.log("Clicked Cancel on prompt alert");
    });
    });



// 4)Authenticagtion alert: It will have text boxes to enter username and password and OK and Cancel buttons



   describe("Authentication Alert Handling in Cypress", () => {

    //    it("should handle Javascript username and password", () => {
    //        cy.visit("https://the-internet.herokuapp.com/basic_auth");
    //        cy.get("input[name='username']").type("tomsmith");
    //        cy.get("input[name='password']").type("SuperSecretPassword!");
    //        cy.get("button[type='submit']").click();
    //        cy.get("#flash").should("contain", "You logged into a secure area!");
       
         it("should handle Authentication alerts using cy.visit()", () => {
              cy.visit("https://the-internet.herokuapp.com/basic_auth", {
                auth: {
                     username: "admin",
                     password: "admin"
                }
              });
              cy.get("div.example p").should("contain", "Congratulations! You must have the proper credentials.");
   });
});




// ------------------------------------------------------------------------------------------------
// 4)Sweet alert: It is a custom alert created in webpage with some text and OK button
// 5)Sweet confirm alert: It is a custom alert created in webpage with some text and OK and Cancel buttons
// 6)Sweet prompt alert: It is a custom alert created in webpage with some text, a text box to enter value and OK and Cancel buttons
// 7)File upload alert: It is a custom alert created in webpage to upload file
// 8)File download alert: It is a custom alert created in webpage to download file
// 9)Notification alert: It is a custom alert created in webpage to show notification message
// 10)Toast alert: It is a custom alert created in webpage to show toast message
// 11)Browser notification alert: It is a browser alert to show notification message
// 12)Push notification alert: It is a browser alert to show push notification message
// 13)In-app notification alert: It is a custom alert created in webpage to show in-app notification message
// 14)System notification alert: It is a system alert to show notification message
// 15)Email notification alert: It is a custom alert created in webpage to show email notification message
// 16)SMS notification alert: It is a custom alert created in webpage to show SMS notification message
// 17)Chat notification alert: It is a custom alert created in webpage to show chat notification message
// 18)Alert with timer: It is a custom alert created in webpage that disappears after a certain time
// 19)Alert with sound: It is a custom alert created in webpage that plays a sound
// 20)Alert with image: It is a custom alert created in webpage that shows an image
// 21)Alert with video: It is a custom alert created in webpage that shows a video
// 22)Alert with link: It is a custom alert created in webpage that shows a link
// 23)Alert with form: It is a custom alert created in webpage that contains a form
// 24)Alert with multiple buttons: It is a custom alert created in webpage that contains multiple buttons

describe.skip("Alert Handling in Cypress", () => {
  it("should handle JavaScript alerts", () => {
    cy.visit("https://example.com");
    cy.get("#js-alert").click();
    cy.on("window:alert", (str) => {
      expect(str).to.equal("This is a JavaScript alert");
    });
  });
});
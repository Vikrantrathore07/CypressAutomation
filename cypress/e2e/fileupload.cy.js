import 'cypress-file-upload';

describe("File Upload", () => {
    // it("should upload a file", () => {
    //     cy.visit("https://the-internet.herokuapp.com/upload");
    //     const filePath = "path/to/your/file.txt";
    //     cy.get("input[type='file']").attachFile(filePath);
    //     cy.get("input[type='submit']").click();
    //     cy.get("h3").should("contain", "File Uploaded!");
   
// ==============================>File upload package must be installed and configured<===============================
    // npm install --save-dev cypress-file-upload
    it('single file upload using fixture', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        // cy.fixture("file.txt").then(fileContent => {
        //     cy.get("input[type='file']").attachFile({
        //         fileContent,
        //         fileName: "file.txt",
        //         mimeType: "text/plain"
        //     });
        // });
        // cy.get("input[type='submit']").click();
        // cy.get("h3").should("contain", "File Uploaded!");

        cy.get("#file-upload").attachFile("Screenshot (5139).png");
        cy.get("#file-submit").click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });

    it('file upload with renaming', () => {
        // cy.visit("https://the-internet.herokuapp.com/upload");
        // cy.fixture("file.txt").then(fileContent => {
        //     cy.get("input[type='file']").attachFile({
        //         fileContent,
        //         fileName: "renamed_file.txt",
        //         mimeType: "text/plain"
        //     });
        // });
        // cy.get("input[type='submit']").click();
        // cy.get("h3").should("contain", "File Uploaded!");

         cy.visit("https://the-internet.herokuapp.com/upload");
         cy.get("#file-upload").attachFile({ filePath: 'Screenshot (5139).png', fileName: 'myfile.png' });
        cy.get("#file-submit").click();
        cy.wait(2000);
        cy.get("div[class='example'] h3").should("have.text", "File Uploaded!");
    });


    it('file upload with drag-and-drop', () => {
        // cy.visit("https://the-internet.herokuapp.com/upload");
        // cy.fixture("file.txt").then(fileContent => {
        //     cy.get("input[type='file']").attachFile({
        //         fileContent,
        //         fileName: "file.txt",
        //         mimeType: "text/plain",
        //         subjectType: 'drag-n-drop'
        //     });
        // });
        // cy.get("input[type='submit']").click();
        // cy.get("h3").should("contain", "File Uploaded!");

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get("#drag-drop-upload").attachFile({ filePath: 'Screenshot (5139).png', subjectType: 'drag-n-drop' });
        cy.wait(2000);
    });

    it('multiple file upload', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        const files = ["file1.txt", "file2.txt"];
        const fileContents = files.map(fileName => {
            return cy.fixture(fileName).then(content => ({
                fileContent: content,
                fileName,
                mimeType: "text/plain"
            }));
        });

        Promise.all(fileContents).then(fileObjs => {
            cy.get("input[type='file']").attachFile(fileObjs);
        });

        cy.get("input[type='submit']").click();
        cy.get("h3").should("contain", "File Uploaded!");
    });

    it('multiple file upload with drag-and-drop', () => {
        cy.visit("https://the-internet.herokuapp.com/upload");
        const files = ["file1.txt", "file2.txt"];
        const fileContents = files.map(fileName => {
            return cy.fixture(fileName).then(content => ({
                fileContent: content,
                fileName,
                mimeType: "text/plain"
            }));
        });

        Promise.all(fileContents).then(fileObjs => {
            cy.get("input[type='file']").attachFile(fileObjs, { subjectType: 'drag-n-drop' });
        });

        cy.get("input[type='submit']").click();
        cy.get("h3").should("contain", "File Uploaded!");
    });

    it('file upload - shadow DOM', () => {
        cy.visit("https://lit.dev/components/file-input/");
        cy.fixture("file.txt").then(fileContent => {
            cy.get("file-input").shadow().find("input[type='file']").attachFile({
                fileContent,
                fileName: "file.txt",
                mimeType: "text/plain"
            });
        });
        cy.get("file-input").shadow().find("#file-name").should("contain", "file.txt");
    });
 });
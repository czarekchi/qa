import { generateCredintials } from "../../support/common_helper";


describe('check element on website', () => {
    let userName: string;
    let password: string;

    beforeEach(() => {
        userName = generateCredintials(7);
        password = generateCredintials()
       cy.visit('/');
    });

    it('login user with valid credentials without remember me checkbox', () => {
        cy.loginUser(userName, password);
        cy.url().should('contain', 'app.html');
    });

    it('login user with valid credentials with remember me checkbox', () => {
        cy.loginUser(userName, password, true);
        cy.url().should('contain', 'app.html');
    });
});


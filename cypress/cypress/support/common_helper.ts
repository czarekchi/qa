import Chainable = Cypress.Chainable;

declare global {
    namespace Cypress {
        interface Chainable {
            loginUser: typeof loginUser;
        }
    }
}


export function loginUser(login, password: string, remember?: boolean): Chainable {
    cy.get('#username').type(login);
    cy.get('#password').type(password);
    if (remember) {
        cy.get('.form-check-input').check();
    }
    return cy.get('#log-in').click();
}

export function generateCredintials(length = 10) {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-=_+[]{}|;:,.<>?';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }
    return randomString;
}



Cypress.Commands.add('loginUser', loginUser);

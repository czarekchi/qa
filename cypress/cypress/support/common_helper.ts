
declare global {
    namespace Cypress {
        interface Chainable {
            loginUser: typeof loginUser;
        }
    }
}

export type users = 'standard_user' | 'locked_out_user' | 'problem_user'| 'performance_glitch_user'

function loginUser(user: users) {
        cy.get('#user-name').type(user);
        cy.get('#password').type('secret_sauce');
        cy.get('#login-button').click();
}

Cypress.Commands.add('loginUser', loginUser);

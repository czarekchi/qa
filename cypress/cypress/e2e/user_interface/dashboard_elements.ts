import { generateCredintials } from "../../support/common_helper";


describe('check element on dashboard', () => {
    let userName: string;
    let password: string;

    before(() => {
        userName = generateCredintials(7);
        password = generateCredintials();
    });

    beforeEach(() => {
        cy.visit('/');
        cy.loginUser(userName, password);
    });

    it('Add account button', () => {
        cy.get('span:contains("Add Account")').should('be.visible');
    });

    it('Make payment button', () => {
        cy.get('span:contains("Make Payment")').should('be.visible');
    });

    it('Total Balance', () => {
        cy.get('.element-balances .balance-title:contains("Total Balance")').should('be.visible');
    });

    it('Credit Available', () => {
        cy.get('.element-balances .balance-title:contains("Credit Available")').should('be.visible');
    });

    it('Due Today', () => {
        cy.get('.element-balances .balance-title:contains("Due Today")').should('be.visible');
    });

    it('Recent Transactions', () => {
        cy.get('.table-responsive').should('be.visible');
    });
});
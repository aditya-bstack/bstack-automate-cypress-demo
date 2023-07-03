// demo.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="cypress" />

it('bstackdemo test1', function(){
    cy.visit('https://bstackdemo.com/');
    cy.get('#signin', {timeout: 6000}).click()
    cy.get('#username > .css-yk16xz-control > .css-1hwfws3', {timeout: 6000}).type('demouser').trigger('keydown', {key: 'Enter',})
    cy.get('#password > .css-yk16xz-control > .css-1hwfws3').type('testingisfun99').trigger('keydown', {key: 'Enter',})
    cy.get('#login-btn').click()
    cy.get('.username').should('be.visible')
    cy.get('#\x31  > .shelf-item__buy-btn', {timeout: 6000}).click()
    cy.get('.buy-btn').click()
    cy.get('#firstNameInput', {timeout: 6000}).type('sampleFirstName')
    cy.get('#lastNameInput').type('sampleLastName')
    cy.get('#addressLine1Input').type('sampleAddressLine')
    cy.get('#provinceInput').type('sampleProvince')
    cy.get('#postCodeInput').type('samplePostalCode')
    cy.get('#checkout-shipping-continue').click()
    cy.get('[data-test="shipping-address-heading"]').should('contain', 'Your Order has been successfully placed.')
    cy.get('.button').click()
    cy.get('#logout').click()
})

// it('bstackdemo test2', function(){
//     cy.visit('https://bstackdemo.com/');
//     cy.get('#signin', {timeout: 6000}).click()
//     cy.get('#username > .css-yk16xz-control > .css-1hwfws3', {timeout: 6000}).type('demousers').trigger('keydown', {key: 'Enter',})
//     cy.get('#password > .css-yk16xz-control > .css-1hwfws3').type('testingisfun99').trigger('keydown', {key: 'Enter',})
//     cy.get('#login-btn').click()
//     cy.get('.username').should('be.visible')
//     cy.get('#\x31  > .shelf-item__buy-btn', {timeout: 6000}).click()
//     cy.get('.buy-btn').click()
//     cy.get('#firstNameInput', {timeout: 6000}).type('sampleFirstName')
//     cy.get('#lastNameInput').type('sampleLastName')
//     cy.get('#addressLine1Input').type('sampleAddressLine')
//     cy.get('#provinceInput').type('sampleProvince')
//     cy.get('#postCodeInput').type('samplePostalCode')
//     cy.get('#checkout-shipping-continue').click()
//     cy.get('[data-test="shipping-address-heading"]').should('contain', 'Your Order has been successfully placed.')
// })

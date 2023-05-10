/// <reference types="cypress" />

describe('Context: My First Tests', () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.visit('/multiple_buttons');
  });

  it('check different button actions', () => {
    //select a button text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');
  });
});

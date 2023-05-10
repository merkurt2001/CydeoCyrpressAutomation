/// <reference types="cypress" />

describe('Find or Get elements by using different loacators', () => {
  beforeEach(() => {
    // run before each test case, like beforeMethod in TestNG
    cy.clearCookies();
    cy.visit('/login');
  });

  it('check different locators strategies', () => {
    // by css
    cy.get("input[name='username']").type('CydeoStudent'); // instead of sendKeys we are using type
    cy.get("[type='text']").clear();
    cy.get("input[name='password']").type('CydeoStudent');
    cy.get("[type='password']").clear();

    cy.get('input').each((item, index, list) => {
      // this part work as findElements method in selenium

      // assert length of the list is 2
      expect(list).to.have.length(2); // list of the web element size is 2
      expect(item).to.have.attr('type'); // item attribute is type

      // for the assertions check chai library for cypress
    });

    // tag name
    cy.get('[type]');

    // by class name
    cy.get('.btn.btn-primary'); // if there  is space with class name put dot instead of space and at the beginning

    // with id
    cy.get('#wooden_spoon');

    // if i want to use text, no xpath but it is still possible

    cy.get('button').should('contain', 'Login').click(); // find the element and check if it contains text
  });

  it('check finding elements by traveling through DOM', () => {
    // travel to find the login button
    // locate username box - go to parent form and then find the button
    cy.get('input[name="username"]')
      .parents('form')
      .find('button')
      .should('contain', 'Login')
      .click();
  });

  it.only('check different type of assertions', () => {
    // cypress itself bundles assertions provided by chai library, sinon and jquery libraries
    // should assertions does the assertion directily on the object itself (multiple assertions for one object)
    // implicit assertion
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');

    // expect assertion = we are creating a function, creates a subject of our test, then you implement different actions
    // expilicit assertion
    cy.get('#wooden_spoon').then((button_element) => {
      expect(button_element).to.have.text('Login');
      expect(button_element).to.have.class('btn btn-primary');
    });
  });
});

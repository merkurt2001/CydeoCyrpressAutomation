/// <reference types="cypress" />



describe('Context: My First Tests', () =>{


    before(() =>{
        //runs once before all test cases in this describe block, like beforeClass in TestNG
    })

    beforeEach(() =>{
        //run before each test case, like beforeMethod in TestNG
        cy.clearCookies();
    })

    after(() => {
        //similar to afterClass in TestNG-- run once after all test cases
    })

    afterEach(() =>{
        //similar to afterMethod in TestNG, runs after each test
    })

    it('Opening a web app', () =>{
        cy.visit('/registration_form');
        
    })
})
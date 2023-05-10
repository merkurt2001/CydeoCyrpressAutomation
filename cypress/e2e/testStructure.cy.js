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

    it('Test 2', () =>{
        expect(false).to.equal(false)
        
    })

    it.skip('Test 3', () =>{
        expect(false).not.to.equal(true)
        
    })

    it('Test 4', () =>{
        expect(5).to.equal(5)
        
    })

    xit('Test 5', () =>{
        expect(true).to.equal('5'==5)
        
    })


})
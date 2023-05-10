/// <reference types="cypress" />



describe('Find or Get elements by using different loacators', () =>{


   
    beforeEach(() =>{
        //run before each test case, like beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })

 
    it('check different locators strategies', () =>{
        //by css
        cy.get("input[name='username']").type("CydeoStudent"); //instead of sendKeys we are using type
        cy.get("[type='text']").clear();
        cy.get("input[name='password']").type("CydeoStudent");
        cy.get("[type='password']").clear();

        cy.get("input").each((item, index, list) => { //this part work as findElements method in selenium

            //assert length of the list is 2
            expect(list).to.have.length(2); //list of the web element size is 2
            expect(item).to.have.attr("type"); //item attribute is type

            //for the assertions check chai library for cypress
        })
     
        
    })


})
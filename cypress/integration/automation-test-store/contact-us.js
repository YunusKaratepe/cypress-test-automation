/// <reference types="Cypress"/>

describe('Test Contact Us form via Automation Test Store', () => {
    it('Should be able to submit a successful submission via contact us form.', () => {


        cy.visit('https://automationteststore.com/')

        /*
        // with css selectors
        cy.get('a[href$="contact"]').click() // a[href$="contact"] -> $ means ends-with, ^ means starts-with
        cy.get('#ContactUsFrm_first_name').type('Yunus')
        cy.get('#ContactUsFrm_email').type('yunus.karatepe@gmail.com')
        cy.get('#ContactUsFrm_enquiry').type('Do you provide additional discount on computers?')
        cy.get('button[title="Submit"]').click() 
        */

        // with xpaths
        cy.xpath('//a[@href="https://automationteststore.com/index.php?rt=content/contact"]').click()
        cy.xpath('//input[@id="ContactUsFrm_first_name"]').type('Yunus')
        cy.xpath('//input[@id="ContactUsFrm_email"]').type('yunus.karatepe@gmail.com')
        cy.xpath('//textarea[@id="ContactUsFrm_enquiry"]').type('Do you provide additional discount on computers?')
        cy.xpath('//button[@title="Submit"]').click() // '//button[contains(@title, "mit")]'
        

    });

});
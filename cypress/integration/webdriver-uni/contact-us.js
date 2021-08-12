/// <reference types="Cypress"/>

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submission via contact us form.', () => {
        // cypress
        // cy.visit('https://webdriveruniversity.com/')
        // cy.get('#contact-us > .thumbnail').click()
        // cy.get('#contact-us').click({force: true})

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Yunus')
        cy.get('[name="last_name"]').type('Karatepe')
        cy.get('[name="email"]').type('deneme@gmail.com')
        cy.get('textarea.feedback-input').type('Site gerçekten de çok hoş olmuş. Teşekkürler...')
        cy.get('[type="submit"]').click()
    });

    // .only -> runs only this test
    // it.only(...)
    it('Should not be able to submit a successful submission via \
        contact us form as all fields are required.', () => {
        // cypress
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Yunus')
        cy.get('[name="last_name"]').type('Karatepe')
        // cy.get('[name="email"]').type('deneme@gmail.com')
        cy.get('textarea.feedback-input').type('Site gerçekten de çok hoş olmuş. Teşekkürler...')
        cy.get('[type="submit"]').click()
    });



});
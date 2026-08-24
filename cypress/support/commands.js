Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {

    cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')

    cy.get('#email').type('qa@test.com')
    cy.get('#password').type('123456')
    cy.contains('button', 'Entrar').click()
    cy.contains('button', 'Continuar').click()
})

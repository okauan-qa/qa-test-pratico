describe('Testando página de login', () => {
    beforeEach(() => {
      cy.visit('https://teste-colmeia-qa.colmeia-corp.com/')
    })
    it('BUG-001 - Mensagem de credenciais inválidas exibida após login válido', () => {
    cy.get('#email').type('qa@test.com')
    cy.get('#password').type('123456')
    cy.contains('button', 'Entrar').click()
    cy.contains('p', 'Seu login está incorreto, quer continuar?').should('have.text', 'Seu login está incorreto, quer continuar?') //Verifica mensagem de erro, mesmo após credenciais válidas

    cy.contains('button', 'Continuar').click()

    cy.url().should('include', '/dashboard') //Verifica se o login foi autenticado
  })
    it('deve impedir o login apenas com nome de usuário', () => {
    cy.get('#email').type('qa.test.co')

    cy.contains('button', 'Entrar').click()

    cy.contains('span', 'Usuário ou senha inválidos').should('be.visible') // Verifica se a mensagem de erro apareceu
  })
    it('deve impedir o login apenas com a senha', () => {
    cy.get('#password').type('1234567')

    cy.contains('button', 'Entrar').click()

    cy.contains('span', 'Usuário ou senha inválidos').should('be.visible') // Verifica se a mensagem de erro apareceu
  })
    it('deve exibir erro ao tentar fazer login sem preencher os campos', () => {
    cy.contains('button', 'Entrar').click()

    cy.contains('span', 'Usuário ou senha inválidos').should('be.visible')
  })
  })

describe('Testando dashboard', () => {
  beforeEach(() => {
    const dataFixa = new Date('2026-08-20T22:30:00-03:00') //Alterando o dia e hora do ambiente para o dia 20/08 às 20h30, horário no qual o erro foi identificado. 

    cy.clock(dataFixa, ['Date'])
    cy.login()
  })
    it('BUG-002 - Data de criação do item exibida incorreta', () => {
    
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('li')
    .first()
    .click()
    cy.contains('button','Criar').click()
    cy.get('input[type="text"]').type('Carro')
    
    cy.contains('button', 'Salvar').click()

    cy.contains('td', '2026-08-21').should('have.text', '2026-08-21') //Verifica que a data mudou para o dia 21/08
  })
  it('BUG-003 - Item arquivado não aparece na lista de arquivados', () =>{
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('li')
    .first()
    .click()
    cy.contains('button','Criar').click()
    cy.get('input[type="text"]').type('Carro')
    
    cy.contains('button', 'Salvar').click()

    cy.get('button[title="Arquivar"]').click()

    cy.get('[data-test="item-arquivado"]').should('have.length', 0) //Verifica que nenhum item foi arquivado
  })
    it('BUG-004 - Botão "Recarregar" some com todos os itens da lista', () =>{
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('li')
    .first()
    .click()
    cy.contains('button','Criar').click()
    cy.get('input[type="text"]').type('Carro')
    
    cy.contains('button', 'Salvar').click()

    cy.get('div.flex.items-center.gap-2')
    .find('button[data-variant="icon"]')
    .last()
    .click()

    cy.contains('td', 'Nenhum banco de dados encontrado').should('be.visible') //Verifica que os itens da lista foram removidos.
  })
      
    it('BUG-005 - Itens desaparecem ao navegar para outra aba e retornar para Banco de dados', () =>{
    cy.get('a[routerlink="/dashboard/campanha"]').click()
    cy.get('li')
    .first()
    .click()
    cy.contains('button','Criar').click()
    cy.get('input[type="text"]').type('Carro')
    
    cy.contains('button', 'Salvar').click()
    cy.contains('td', 'Carro').should('be.visible')

    cy.get('li')
    .last()
    .click()

    cy.get('li')
    .first()
    .click()

    cy.contains('td', 'Nenhum banco de dados encontrado').should('be.visible') //Verifica que os itens da lista sumiu
  })
})
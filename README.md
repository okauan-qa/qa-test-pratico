# Teste Prático de QA

Repositório desenvolvido como parte de um desafio prático para uma vaga de **Quality Assurance (QA)**.

O projeto reúne testes funcionais e automatizados realizados em uma aplicação web, com foco na validação de funcionalidades, regras de negócio, fluxos de usuário e identificação de possíveis problemas.

## Objetivo

Demonstrar a aplicação de conhecimentos de QA por meio de:

* Criação e execução de cenários de teste;
* Automação de testes E2E;
* Validação de fluxos positivos e negativos;
* Identificação e documentação de bugs;
* Registro de evidências;
* Elaboração de relatório de testes.

## Conteúdo do projeto

* [`cypress/`](./cypress) — código dos testes automatizados, comandos personalizados e arquivos de suporte.
* [`cypress.config.js`](./cypress.config.js) — configuração do Cypress.
* [`package.json`](./package.json) — dependências e scripts do projeto.
* [`package-lock.json`](./package-lock.json) — versões das dependências utilizadas.
* [`Teste-Pratico-QA-KauanBrito.pdf`](./Teste-Pratico-QA-KauanBrito.pdf) — relatório completo com casos de teste, evidências e bugs identificados.

## Automação de testes

Os testes automatizados foram desenvolvidos utilizando **Cypress**, contemplando diferentes fluxos da aplicação:

* Login com credenciais válidas;
* Validações de login sem usuário e/ou senha;
* Validação de credenciais inválidas;
* Criação de item no módulo **Campanha → Bancos de dados**;
* Validação da data de criação;
* Arquivamento de item;
* Recarregamento da lista;
* Persistência dos itens durante a navegação entre opções de Campanha.

Também foram utilizados **comandos personalizados** e recursos do Cypress para tornar os testes mais organizados e reutilizáveis.

## Estrutura dos testes

```text
cypress/
├── e2e/
│   └── qa-teste-colmeia.cy.js
├── fixtures/
│   └── example.json
└── support/
    ├── commands.js
    └── e2e.js

cypress.config.js
package.json
package-lock.json
Teste-Pratico-QA-KauanBrito.pdf
```

### Principais arquivos

* [`cypress/e2e/`](./cypress/e2e) — testes automatizados E2E.
* [`cypress/support/commands.js`](./cypress/support/commands.js) — comandos personalizados e fluxos reutilizáveis.
* [`cypress/support/e2e.js`](./cypress/support/e2e.js) — configurações de suporte dos testes.
* [`cypress/fixtures/`](./cypress/fixtures) — dados utilizados como apoio aos testes.
* [`cypress.config.js`](./cypress.config.js) — configuração do projeto Cypress.

## Bugs identificados

Durante a execução dos testes automatizados e testes exploratórios, foram identificados e documentados **6 bugs**:

| ID      | Título                                                       | Módulo                    |
| ------- | ------------------------------------------------------------ | ------------------------- |
| BUG-001 | Mensagem de credenciais incorretas exibida após login válido | Login                     |
| BUG-002 | Item criado em 29/09 é exibido com data de criação em 21/08  | Campanha → Banco de dados |
| BUG-003 | Item arquivado não aparece na lista de arquivados            | Campanha → Banco de dados |
| BUG-004 | Ao clicar em “Recarregar”, os itens deixam de ser exibidos   | Campanha → Banco de dados |
| BUG-005 | Itens desaparecem ao navegar e retornar para Banco de dados  | Campanha → Banco de dados |
| BUG-006 | Botões do menu respondem somente ao clique sobre o texto     | Campanha                  |

Os bugs foram identificados por meio de testes automatizados e testes exploratórios, sendo documentados com cenário, comportamento esperado, comportamento encontrado e evidências.

## Evidências e relatório

O relatório completo do desafio pode ser acessado em:

[`Teste-Pratico-QA-KauanBrito.pdf`](./Teste-Pratico-QA-KauanBrito.pdf)

O documento contém os casos de teste, resultados, bugs identificados e respectivas evidências.

## Tecnologias e ferramentas

* [Cypress](https://www.cypress.io/)
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
* [Node.js](https://nodejs.org/)
* [npm](https://www.npmjs.com/)
* [Git](https://git-scm.com/)
* [GitHub](https://github.com/)

---

**Kauan Brito**
Desafio prático — Quality Assurance (QA)

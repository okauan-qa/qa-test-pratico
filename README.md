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

### Automação

Os testes automatizados foram desenvolvidos utilizando **Cypress**, contemplando diferentes fluxos da aplicação, como:

* Login com credenciais válidas;
* Validações de login com campos não preenchidos;
* Validação de credenciais inválidas;
* Criação de itens no módulo **Campanha → Bancos de dados**;
* Validação da data de criação;
* Arquivamento de itens;
* Recarregamento da lista;
* Persistência dos itens durante a navegação.

A automação também utiliza comandos personalizados e recursos do Cypress para facilitar a reutilização dos fluxos de teste.

### Bugs identificados

Durante a execução dos testes automatizados e testes exploratórios, foram identificados e documentados **6 bugs**, relacionados principalmente aos módulos de Login e Campanha → Banco de dados.

Entre os problemas encontrados estão:

* Mensagem incorreta após tentativa de login válido;
* Divergência na data de criação de itens;
* Problemas no arquivamento de itens;
* Itens que deixam de ser exibidos após recarregar a página;
* Itens que desaparecem após navegar entre opções do menu;
* Problemas na área clicável dos botões do menu.

Cada bug possui documentação com informações sobre o cenário, comportamento esperado, comportamento encontrado e evidências.

## Estrutura do projeto

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

* **cypress/e2e/** — testes automatizados E2E;
* **cypress/support/commands.js** — comandos personalizados e fluxos reutilizáveis;
* **cypress/support/e2e.js** — configurações de suporte dos testes;
* **cypress/fixtures/** — dados utilizados como apoio aos testes;
* **cypress.config.js** — configuração do Cypress;
* **Teste-Pratico-QA-KauanBrito.pdf** — relatório com os testes realizados, bugs identificados e evidências.

## Tecnologias e ferramentas

* **Cypress**
* **JavaScript**
* **Node.js**
* **npm**
* **Git**
* **GitHub**

## Relatório

O relatório completo do desafio está disponível no arquivo:

**Teste-Pratico-QA-KauanBrito.pdf**

Nele estão documentados os cenários de teste, resultados, bugs encontrados e respectivas evidências.

---

**Kauan Brito**
Desafio prático — Quality Assurance (QA)

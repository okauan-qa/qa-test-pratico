# Teste Prático de QA

Repositório contendo casos de teste, automação E2E com Cypress, evidências, bugs identificados e relatório final desenvolvidos durante o desafio prático para a vaga de Quality Assurance (QA).

## Conteúdo

- 📁 [`cypress/`](./cypress) — código dos testes automatizados, comandos personalizados e arquivos de suporte.
- ⚙️ [`cypress.config.js`](./cypress.config.js) — configuração do Cypress.
- 📦 [`package.json`](./package.json) — dependências e scripts do projeto.
- 🔒 [`package-lock.json`](./package-lock.json) — versões bloqueadas das dependências.
- 📄 [`Teste-Pratico-QA-KauanBrito.pdf`](./Teste-Pratico-QA-KauanBrito.pdf) — relatório completo com casos de teste, evidências e bugs.

## Pré-requisitos

- Node.js instalado.
- npm instalado.
- Acesso ao ambiente de QA.
- Credenciais de teste válidas para o ambiente.

> Por segurança, credenciais e informações sensíveis não são armazenadas neste repositório.

## Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/okauan-qa/qa-test-pratico.git
cd qa-test-pratico
```

Instale as dependências:

```bash
npm install
```

Para instalações reproduzíveis usando o arquivo `package-lock.json`, também é possível utilizar:

```bash
npm ci
```

## Execução dos testes

Abrir o Cypress em modo interativo:

```bash
npx cypress open
```

Executar os testes em modo headless:

```bash
npx cypress run
```

Executar somente o arquivo principal de testes:

```bash
npx cypress run --spec "cypress/e2e/qa-teste-colmeia.cy.js"
```

Caso o nome do arquivo no repositório seja diferente, ajuste o caminho utilizado no comando acima.

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
```

- `cypress/e2e/` — casos de teste E2E.
- `cypress/support/commands.js` — comandos personalizados, incluindo o fluxo reutilizável de login.
- `cypress/support/e2e.js` — configuração global dos testes.
- `cypress/fixtures/` — dados estáticos de apoio.
- `cypress.config.js` — configuração do projeto Cypress.

## Cenários automatizados

- Login com credenciais válidas.
- Validações de login sem usuário, sem senha e sem preenchimento dos campos.
- Criação de item no módulo Campanha → Bancos de dados.
- Validação da data de criação usando data simulada com `cy.clock()`.
- Arquivamento de item.
- Recarregamento da lista.
- Persistência dos itens durante a navegação entre opções de Campanha.

## Bugs identificados

| ID | Título | Módulo |
|----|--------|--------|
| BUG-001 | Mensagem de credenciais incorretas exibida após login válido | Login |
| BUG-002 | Item criado em 20/08 é exibido com data de criação em 21/08 | Campanha → Banco de dados |
| BUG-003 | Item arquivado não aparece na lista de arquivados | Campanha → Banco de dados |
| BUG-004 | Ao clicar em “Recarregar”, os itens deixam de ser exibidos | Campanha → Banco de dados |
| BUG-005 | Itens desaparecem ao navegar e retornar para Banco de dados | Campanha → Banco de dados |
| BUG-006 | Botões do menu respondem somente ao clique sobre o texto | Campanha |

## Observações sobre a cobertura

- Os BUGs 001 a 005 foram reproduzidos e documentados com apoio de testes automatizados em Cypress.
- O BUG-006 foi identificado por teste manual exploratório e documentado com evidência visual. O cenário depende da posição exata do clique dentro da área visual do item do menu: o clique sobre o texto funciona, mas o clique fora do texto não dispara a navegação.
- O relatório detalhado com cenário, pré-condições, passos, resultados e evidências está disponível no PDF.

## Controle da data no BUG-002

O cenário do BUG-002 utiliza `cy.clock()` para simular o ambiente em 20/08/2026 às 22h30, mantendo os timers reais da aplicação por meio do controle somente da função `Date`.

## Evidências e relatório

Consulte o relatório completo:

📄 [`Teste-Pratico-QA-KauanBrito.pdf`](./Teste-Pratico-QA-KauanBrito.pdf)

## Tecnologias utilizadas

- Cypress.
- JavaScript.
- Node.js.
- npm.
- Git e GitHub.

---

Kauan Brito — desafio prático para vaga de QA.
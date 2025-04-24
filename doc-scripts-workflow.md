# Explicação do Arquivo `alo-mundo.yml`

Este arquivo é um workflow do **GitHub Actions**. Ele define um processo automatizado que será executado sempre que um push for feito na branch `main` do repositório.

## Detalhamento Linha por Linha

- `name: Alô Mundo`: Define o nome do workflow como **"Alô Mundo"**.

- `on: push: branches: - main`: Especifica que o workflow será acionado quando houver um **push** na branch `main`.

- `jobs: build: runs-on: ubuntu-latest`: Cria um **job** chamado `build`, que será executado em um ambiente com a versão mais recente do **Ubuntu**.

- `steps:`: Lista os **passos** que serão executados dentro do job.

- `- name: Exibir mensagem run: echo "Alô Mundo"`: Define um passo que executa o comando `echo "Alô Mundo"`, exibindo essa mensagem no terminal.

### Resumo

Esse workflow realiza o checkout do código do repositório e imprime a mensagem **"Alô Mundo"** sempre que um push é feito na branch `main`.

---

# Documentação do Workflow: Testes Automatizados

O arquivo `build-manual.yml` configura um workflow chamado **"Testes Automatizados"** no GitHub Actions. Ele é disparado manualmente através do evento `workflow_dispatch`.

## Jobs

Este workflow contém um único **job**, chamado `build`.

### Job: Build

O job `build` é executado em um runner com a imagem mais recente do Ubuntu (`ubuntu-latest`).

#### Etapas do Job

1. **Checkout do repositório**  
   Usa a ação [`actions/checkout@v2`](https://github.com/actions/checkout) para clonar o código do repositório no runner.

2. **Configuração do Node.js**  
   Utiliza a ação [`actions/setup-node@v2`](https://github.com/actions/setup-node) para instalar a versão `14` do Node.js.

3. **Instalação de dependências**  
   Executa o comando `npm install` para instalar todas as dependências listadas no `package.json`.

4. **Execução dos testes**  
   Executa o comando `npm test` para rodar os testes automatizados do projeto.

## Como Executar o Workflow

Como o workflow é configurado com o evento `workflow_dispatch`, ele pode ser acionado manualmente pela interface do GitHub:

1. Acesse a aba **Actions** no seu repositório.
2. Selecione o workflow **Testes Automatizados**.
3. Clique no botão **Run workflow**.

---
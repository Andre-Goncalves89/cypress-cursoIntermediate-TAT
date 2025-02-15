# Projeto de automação de testes da pág web giLab com Cypress

Esse projeto foi realizado para fins educacionais, sendo totalmente inspirado do projeto original do curso intermediário de Cypress da escola TAT(Talking About Testing), onde criei esse repositório para praticar os conhecimentos adquiridos.
Para mais informações visite: [https://talkingabouttesting.com/category/escola-tat/](https://talkingabouttesting.com/category/escola-tat/)  
Projeto/Repositório original: [https://github.com/wlsf82/cypress-intermediario-v2/tree/final-solution](https://github.com/wlsf82/cypress-intermediario-v2/tree/final-solution)  
Agradecimentos ao professor Walmyr Lima e Silva Filho por compartilhar conhecimento e ajudar no desenvolvimento de novos profissionais na área de Qualidade de Softwares!

## Pré Requisitos para rodar a aplicação

*   Computador com no mínimo 2 cores
*   8GB RAM de memória mínima
*   Docker (versão 20.10.13 ou mais recente)
*   git(versão 2.34.1 ou mais recente)
*   Node.js (versão 16.13.2 ou mais recente)
*   Visual Studio Code (versão 1.73.1 ou mais recente) ou outra IDE de sua preferência

## Setup do ambiente local com Docker

1.  Execute o comando

    ```
    docker run --publish 80:80 --publish 22:22 --hostname localhost wlsf82/gitlab-ce
    ```
2.  Acesse a URL: http://localhost para definir a senha do usuário root.
3.  Ao carregar a página de change password, crie uma senha, confirme a mesma senha e clique no botão change your password
4.  Em seguida na nova página que irá carregar, efetue login com usuário: root e a senha registrada no passo anterior
5.  Após efetuar login com sucesso, clique no avatar do usuário no canto superior direito da tela, clique no link settings, e então, clique na opção Acess Tokens(no menu lateral esquerdo)
6.  No campo nome, digite o valor cypress-intermediario-v2; na seção Scopes marque a opção api; e então, clique na botão create personal acess token

## Adicionando uma chave SSH

1.  No terminal de linha de comando, digite o seguinte comando:

    ```
    ssh-keygen -t ed25519 -C "root@example.com"
    ```
2.  Será solicitado um caminho para salvar a chave. Pressione ENTER para aceitar o caminho padrão
3.  Será solicitada uma senha. Pressione ENTER para que a senha não seja necessária
4.  Será solicitado que repita a senha. Pressione ENTER novamente para que a senha não seja necessária
5.  De novo no terminal de linha de comando, digite o seguinte comando:

    ```
    pbcopy < ~/.ssh/id_ed25519.pub
    ```
6.  Logado na aplicação com o usuário root, clique no avatar do usuário no canto superior direito da tela; clique no link Settings; e então, clique na opção SSH Keys (no menu lateral esquerdo)
7.  Cole sua chave SSH pública no campo key. O campo Title deve ser automaticamente preenchido
8.  Por fim, clique no botão Add key.

Você também encontrará instruções sobre como gerar a chave SSH em sistema operacional Windows na própria aplicação em teste (rodando em seu ambiente local com Docker) a partir da seguinte URL http://localhost/help/ssh/README#generating-a-new-ssh-key-pair (instruções em Inglês).

## Instalando o Cypress e outras libs

No terminal de linha de comando, na raiz do projeto, execute o comando

```
npm i @faker-js/faker@7.6.0 cypress@12.0.2 cypress-plugin-api@2.6.1 -D
```

(este comando irá instalar o Cypress e outras libs como dependências de desenvolvimento, além de criar o arquivo package-lock.json e o diretório node_modules/, para onde é feito o download de todas as dependências).

## Inicializando o Cypress

1.  No terminal de linha de comando, na raiz do projeto, execute o comando

    ```
    npx cypress open
    ```

    (este comando irá abrir a Cypress App, a qual vai te guiar na criação do projeto de testes end-to-end (E2E).
2.  Crie um projeto de testes end-to-end (E2E Testing)
3.  Selecione um navegador e clique no botão Start E2E Testing 
4.  Crie um primeiro arquivo de teste clicando na opção Create new emtpy spec
5.  Nomeie o arquivo como login.cy.js; clique no botão Create spec e confirme clicando no botão Ok, run the spec
6.  Após a execução do arquivo recém criado, feche o navegador.

## Configurando o projeto de testes automatizados

1.  Feche a Cypress App
2.  Abra o arquivo cypress.config.js criado na raiz do projeto e altere seu conteúdo pelo seguinte:

```javascript
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
  },
  fixturesFolder: false,
  video: false,
})
```

Ainda na raiz do projeto, crie um arquivo chamado cypress.env.json com os seguintes dados:

```json
{
  "user_name": "root",
  "user_password": "password-do-usuario-root-definido-anteriormente",
  "gitlab_access_token": "access-token-criado-anteriormente"
}
```

## Documentação oficial do Cypress

caso você tenha dúvidas sobre qualquer comando do Cypress, utilize a documentação oficial como sua primeira fonte de consultas:
[https://docs.cypress.io/app/get-started/why-cypress](https://docs.cypress.io/app/get-started/why-cypress)

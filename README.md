Cadastro de Usuários 📝


Esse é um projetinho simples que eu fiz pra praticar o conceito de CRUD usando HTML, CSS, JavaScript no front-end e Node.js com MySQL no back-end.
O sistema permite cadastrar, visualizar, editar e excluir usuários de forma fácil, tudo conectado a um banco de dados real.

🚀 Funcionalidades


    Adicionar um novo usuário com nome, profissão e salário.
    
    Listar todos os usuários já cadastrados.
    
    Editar informações de qualquer usuário.
    
    Excluir um usuário do sistema com confirmação.
    
    Tudo isso acontece em tempo real com integração total entre o front e o back-end.


🧠 Conceitos que eu pratiquei


    CRUD (Create, Read, Update, Delete)
    
    Requisições HTTP com fetch
    
    Express.js pra criar a API
    
    MySQL pra guardar os dados de forma organizada
    
    Integração entre front-end e back-end
    
    Manipulação do DOM com JavaScript puro

🛠 Tecnologias usadas


    HTML5
    
    CSS3
    
    JavaScript
    
    Node.js + Express
    
    MySQL
    
    Git

📷 Visual

A interface é simples e direta, mostrando os usuários em cards, com botões para editar ou excluir. O foco foi mais no funcionamento do sistema do que no visual elaborado (mas dá pra estilizar mais no futuro 😄).

🧪 Como usar

Se quiser testar o projeto na sua máquina, é só seguir os passos abaixo:


✅ Pré-requisitos


    Node.js instalado (https://nodejs.org)
    
    MySQL rodando (com a porta padrão 3306)
    
    Um banco de dados chamado cadastro com a tabela usuarios
    
    📦 Instale as dependências do back-end
    No terminal, navegue até a pasta do projeto e rode:
    
    bash
    Copiar
    Editar
    npm install
    
    
    🗄️ Crie o banco e a tabela no MySQL
    
    
    No seu MySQL, execute esse script:
    
    CREATE DATABASE IF NOT EXISTS cadastro;
    
    USE cadastro;
    
    CREATE TABLE usuarios (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100),
      profissao VARCHAR(100),
      salario DECIMAL(10,2)
    );
    
    
    ▶️ Inicie o servidor no terminal do arquivo server.js com o comando abaixo
    
      node server.js

    
    O servidor vai rodar em: http://localhost:3000

💡 Por que fiz esse projeto?
Tô em busca de uma oportunidade de estágio em desenvolvimento e queria mostrar um projeto prático, feito com dedicação, que demonstrasse que eu entendi o básico do funcionamento de um sistema com back-end e banco de dados.

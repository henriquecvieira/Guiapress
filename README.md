
<h1>Guiapress</h1>

Blog com painel administrativo 
parte integrante do curso Formação Node JS - plataforma Udemy
professor Victor Lima



O Guiapress é uma API REST que permite o cadastro, edição e 
deleção de artigos e categorias de artigos, página de leitura e 
listagem dos arquivos e das categorias.





## Documentação da API

#### Retorna todos os itens

```http
  GET /
```

| Parâmetro   |  Descrição                           |
| :---------- | :---------------------------------- |
| Cadastrar nova categoria | admin/categories/new |
| Listagem  das categorias  | admin/categories |
| Edição de uma única categoria |  admin/categories/edit/:id |
| Cadastrar novo artigo | admin/articles/new |
| listagem de artigos  | admin/articles |
| Edição de um único artigo |  admin/categories/edit/:id |



```http
  POST 
```
| Parâmetro   |  Descrição                           |
| :---------- | :---------------------------------- |
| Salvar categoria | admin/categories/new      |
| Deletar categoria  | admin/categories       |
| Editar uma única categoria | categories/update|
| Salvar artigo | admin/articles/new  |
| Deletar artigo  | admin/articles |
| Editar um único artigo | articles/update |








## Dependências



```bash

  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "bcryptjs": "^2.4.3",
    "body-parser": "^1.19.2",
    "ejs": "^3.1.6",
    "express": "^4.17.3",
    "express-session": "^1.17.2",
    "mysql2": "^2.3.3",
    "sequelize": "^6.17.0",
    "slugify": "^1.6.5"
  },
  "devDependencies": {
    "nodemon": "^2.0.15"
  }
}
```
    
## Aluno e Autor

- [Henrique Vieira](https://github.com/henriquecvieira/Guiapress)
- [Victor Lima](https://github.com/techtuxbr)

## Referência

 - [Udemy Formação Node Js](https://www.udemy.com/course/formacao-nodejs)
 

## 🚀 Sobre mim
Desenvolvedor de sistemas, com foco em inovação e visando perspectivas diferentes na criação de produto, sempre propondo padrões modernos de arquitetura de softwares e metodologias ágeis (Scrum), procuro facilitar e acelerar os objetivos de negócio.
Experiência na construção e manutenção de aplicações:
- API’s desenvolvidas em REST integradas ao Gateway WSO2
- Utilização de bancos de dados Relacional (MySQL e MongoDB).
- Desenvolvimento de aplicações utilizando tecnologia adequada de acordo com a necessidade de cada contexto:
- NODE.JS, SCRUM, SQL, MongoDB e JavaScript.

<a href="https://www.linkedin.com/in/henriquecarvalhovieira/">
    
  <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/87788394?s=400&u=7f36505574f0bc15df5b88cc887a51f8e6406310&v=4" width="100px;" alt=""/>
  <br />
  <sub><b>Henrique Vieira</b></sub></a> <a href="https://blog.rocketseat.com.br/author/thiago//" title="Rocketseat">🚀</a>
 
 
 Feito com ❤️ por Henrique Vieira 
 
 👋🏽 Entre em contato!
 
 [![Linkedin Badge](https://img.shields.io/badge/-Henrique-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/henriquecarvalhovieira/)](https://www.linkedin.com/in/henriquecarvalhovieira/) 
 [![Live mail Badge](https://img.shields.io/badge/-hnr01@live.com-5186e1?style=flat-square&logo=Outlook&logoColor=white&link=mailto:hnr01@live.com)](mailto:hnr01@live.com)

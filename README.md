## **1. Diagrama de Classe**
O diagrama abaixo representa as entidades do sistema e seus relacionamentos:

<img width="385" alt="image" src="https://github.com/user-attachments/assets/aa7af244-fb3a-4ff5-a518-e0dcf96c87bc" />

- **Filme**: Entidade principal, com propriedades como `id`, `título`, `diretor`, `ano` e `duracao`.
- 
- **FilmeList**: Gerencia uma lista de filmes e operações CRUD.

## **2. Arquitetura MVC**
O projeto está organizado seguindo o padrão MVC:

```
src/
├── controllers/
│   ├── filmeController.js
├── models/
│   ├── filme.js
│   ├── filmeList.js
├── routes/
│   ├── filmeRoutes.js
├── server.js
```
- **Models**: Define as classes e lógica de dados.
- **Controllers**: Contém as funções que lidam com as requisições e respostas.
- **Routes**: Gerencia as rotas da API.

## **3. Dependências**
No package.json, as seguintes dependências são usadas no peojeto:
```json
{
  "dependencies": {
  "cors": "^2.8.5",
  "express": "^4.21.2",
  "nodemon": "^3.1.9",
  "uuid": "^11.0.5"
  },
```

## **4. Formato JSON**
A API utiliza o formato JSON para transmitir e receber dados. Exemplos:

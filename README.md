## **1. Diagrama de Classe** | 📊
O diagrama abaixo representa as entidades do sistema e seus relacionamentos:

![image](https://github.com/user-attachments/assets/cbcb4dab-eb87-4271-ad49-9444335b6c28)

## **2. Arquitetura MVC** 🧩📐
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
### **Criar Filme (POST /api/filmes)**
```json
{
  "title": "Elementos",
  "genre": "Animação",
  "duration": "149",
  "director": "Pete Docter"
}
```

### **Resposta de Sucesso** | ✔
```json
{
  "message": "Filme registrado com sucesso!",
  "movie": {
      "id": "c40d6214-c51b-4f3d-a615-93d20862f775",
      "title": "Elementos",
      "genre": "Animação",
      "duration": "149",
      "director": "Pete Docter"
      }
}
```

## **5. Formato XML** | 


Embora JSON seja o principal formato, um exemplo de estrutura em XML seria:

```xml
<movie>
  <title>Elementos</title>
  <genre>Comédia</genre>
  <duration>149</duration>
  <director>Pete Docter</director>
</movie>
```
## **6. Testes com Postman** | 

Uma coleção de requisições foi criada para testar a API no Postman. 

Endpoints:
- **POST /api/filmes**: Cria um novo filme.
- **GET /api/filmes**: Retorna todos os filmes.
- **GET /api/filmes/:id**: Retorna um filme específico.
- **PUT /api/filmes/:id**: Atualiza informações de um filme.
- **DELETE /api/filmes/:id**: Remove um filme.

## **7. Confira as rotas** | 🚊



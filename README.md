# 🐾 API REST para Adoção de Pets com Node.js, Express, MongoDB e Mongoose

## 📄 Descrição
Este repositório contém o código-fonte de uma **API REST** construída para uma aplicação de adoção de pets, utilizando **Node.js**, **Express**, **MongoDB** e **Mongoose**. A API permite gerenciar informações sobre pets disponíveis para adoção, usando schemas, modelos e aplicando validações nos dados para garantir sua integridade.

## 🌟 Características
- **CRUD completo** para gerenciar os pets (Criar, Ler, Atualizar e Excluir).
- Utilização do **Mongoose** para manipular o banco de dados MongoDB.
- **Validações** nos dados dos pets, como idade, nome e descrição.
- Arquitetura **MVC** (Modelo-Visão-Controlador) para organizar o código.
- Otimização e boas práticas no desenvolvimento de APIs.

## ✅ Requisitos
- **Node.js** (versão 14 ou superior)
- **MongoDB**
- **NPM** (Gerenciador de pacotes do Node.js)

## 🚀 Instalação

### Passo a Passo

1. **Clone este repositório**:
   
   ```bash
   git clone https://github.com/SamilMoret/Petshop.git
   ```

2. **Acesse o diretório do projeto**:
   
   ```bash
   cd adocao-pets-api
   ```
   
3. **Instale as dependências**:

   ```bash
   npm install
   ```
   
5. **Configure as variáveis de ambiente em um arquivo .env com a sua conexão do MongoDB**:
   
   ```bash
   MONGODB_URI=mongodb://localhost:5100/adocao/pets
   ```
   
6. **Inicie o servidor**:

   ```bash

   npm start

   ```

## 📚 Uso

Uma vez que o servidor esteja em execução, você pode acessar os seguintes endpoints para gerenciar os pets:

- **GET** `/pets`: Listar todos os pets disponíveis.
- **POST** `/pets`: Criar um novo pet.
- **GET** `/pets/:id`: Obter informações de um pet pelo seu ID.
- **PUT** `/pets/:id`: Atualizar informações de um pet.
- **DELETE** `/pets/:id`: Excluir um pet.

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

## 🛠️ Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)  **Node.js**: Ambiente de execução JavaScript no servidor.
- ![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)  **Express**: Framework minimalista para Node.js.
- ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)  **MongoDB**: Banco de dados NoSQL orientado a documentos.
- ![Mongoose](https://img.shields.io/badge/Mongoose-800000?style=for-the-badge&logo=mongoose&logoColor=white)  **Mongoose**: Biblioteca para modelagem de objetos com MongoDB e Node.js.
- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)  **Visual Studio Code**: Editor de código fonte utilizado para o desenvolvimento.
- ![Thunder Client](https://img.shields.io/badge/Thunder%20Client-FDC830?style=for-the-badge&logo=thunder-client&logoColor=white)  **Thunder Client**: Extensão do Visual Studio Code para testes de APIs.

## 📋 Passos para a Realização do Projeto

### Primeiros Passos com MongoDB
1. **Instalação e configuração** do ambiente.
2. Configuração do **MongoDB Atlas** para uso online.

### Construção da API
1. **Início do Projeto** e configuração do ambiente Node.js.
2. Estruturação da **API** com pastas e arquivos organizados.
3. Implementação de **rotas** e **controladores**.
4. Conexão ao **MongoDB** e criação do banco de dados.
5. Implementação das operações **CRUD**.

### Melhorando a API com Mongoose
1. Instalação de **Mongoose** e suas funcionalidades.
2. Definição de **schemas** para a estrutura dos dados.
3. Ajuste do **modelo** e aprimoramento da manipulação de dados.
4. Validação dos dados e testes da API para garantir qualidade.

### Rutas Públicas, Privadas e Autenticação
1. **Autenticação e autorização** em APIs.
2. Implementação de **rotas públicas, privadas e de autenticação**.
3. Criação do **modelo de usuário** para autenticação.
4. Desenvolvimento do **controller de login**.
5. Implementação de **JSON Web Tokens** para autenticação.
6. Ajuste das rotas para verificar a validade do **token**.

## 🤝 Contribuições

Se desejar contribuir para este projeto, fique à vontade para fazer um **fork**, criar uma **branch** e enviar um **pull request** com suas melhorias.


   



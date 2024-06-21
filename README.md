# ![Furniro](https://furniro-ds.s3.us-east-2.amazonaws.com/utils/logo.svg) Furniro Store

## Sobre o Projeto

Furniro é uma aplicação de e-commerce que permite aos usuários navegar, adicionar produtos ao carrinho e realizar compras. Este projeto foi desenvolvido utilizando React, Redux, Tailwind CSS e outras tecnologias modernas.

## Funcionalidades

- **Catálogo de Produtos**: Navegue por uma variedade de produtos.
- **Carrinho de Compras**: Adicione, atualize e remova produtos do carrinho.
- **Checkout**: Processe o pagamento e complete sua compra.
- **Busca por CEP**: Preencha automaticamente os detalhes do endereço ao inserir o CEP.
- **Autenticação**: Páginas protegidas para checkout.

## Tecnologias Utilizadas

- **Frontend**:
  
  - [React](https://reactjs.org/)
  - [Redux](https://redux.js.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Splide](https://splidejs.com/) (para carrossel de imagens)
  - [React Hook Form](https://react-hook-form.com/) (para gerenciamento de formulários)
  - [Zod](https://zod.dev/) (para validação de formulários)
    
- **Backend**:
  - API para busca de endereço por CEP

## Como Executar o Projeto

### Pré-requisitos

- Node.js
- npm ou yarn

### Passos para Rodar o Projeto

1. Clone o repositório:
   ```sh
   git clone https://github.com/DaniloSalvato/Furniro
   ```
2. Navegue até o diretório do projeto::
   ```sh
   cd furniro
   ```
3. Instale as dependências:
   ```sh
   npm install
   ```
   # ou

   ```sh
   yarn install
   ```

4.  inicie a aplicação:
   ```sh
   npm run dev
   ```



### Os requisitos **OBRIGATÓRIOS** são:

- Utilize TypeScript para tipagem;
- Utilize [Firebase](https://firebase.google.com/docs/auth?hl=pt-br), para lidar com a autenticação do usuário. A autenticação deve ser possível com: e-mail, Facebook e Google. A documentação linkada está detalhada e fornece todas as informações necessárias para aplicar esta funcionalidade;
- [React Router](https://reactrouter.com/en/main) para criação das rotas, sendo que é necessário proteger as rotas;
- Crie controles deslizantes para exibição dos móveis na sessão da Home, em formato de Carrossel. Recomendação de biblioteca: [Splide](https://splidejs.com/). [Splide for React docs.](https://splidejs.com/integration/react-splide/) **Sinta-se à vontade para usar a biblioteca de sua preferência;**
- Crie um arquivo JSON e cole-o no [Run Mocky](https://designer.mocky.io/) para criar uma API para os produtos;
- A página de produtos gerais deve conter paginação como no Figma, o botão de ‘Filter’ deve abrir um pop-up com filtros funcionais;
- Ao clicar no card de um móvel, é necessário redirecionar o usuário para a rota específica que contém suas informações detalhadas (Product Page);
- Na página de produto, o botão de ‘Add To Cart’ deve adicionar o produto no carrinho e o produto pode ser adicionado ou removido quantas vezes o usuário desejar;
- O carrinho deve ser criado com [**Redux**](https://redux.js.org/);
- Na página de carrinho o usuário pode remover todos os produtos, independente da quantidade, ao clicar no ícone de lixeira;
- Ao clicar no botão de ‘Check Out’, o usuário PRECISA estar logado para fazer o redirecionamento para a página de Check Out, essa rota específica deve estar protegida;
- Os campos de formulário devem ser todos validados;
- Na página de Check Out, os dados de endereço devem vir da [API](https://viacep.com.br/) e preencher todos os campos de endereço automaticamente, exceto o de complemento;
- A aplicação deve estar responsiva;
- Pode fazer o uso de biblioteca externa (estritamente **styled-components ou Tailwind)** para estilização;
- Testes unitários com pelo menos 70% de cobertura;
- Adicione um README ao seu projeto, com instruções para inicializar e rodar sua aplicação;
- Faça pequenos commits e use Convencionais Commits para manter seu repositório organizado.

### Os requisitos Parte 2 são (ainda não acabou)…

- ReactApp rodando em uma instância EC2 (uso geral) com porta aberta para acesso externo (VPC do EC2)
- Todas as imagens devem ser hospedadas em bucket do S3 (uso geral)

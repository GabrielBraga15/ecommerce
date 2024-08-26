Projeto de E-commerce
Este projeto é um site de e-commerce desenvolvido utilizando React, Next.js e TailwindCSS. O objetivo é fornecer uma experiência de compra agradável e responsiva para os usuários, com uma interface moderna e funcional.

Tecnologias Utilizadas
React: Biblioteca JavaScript para construir interfaces de usuário.
Next.js: Framework para React que oferece funcionalidades adicionais como renderização do lado do servidor e geração de páginas estáticas.
TailwindCSS: Framework de CSS que permite criar designs modernos e responsivos rapidamente com uma abordagem utilitária.
Estrutura do Projeto
1. Páginas
Home Page (/): Exibe uma lista de produtos com funcionalidade de pesquisa e filtragem.
Página do Produto (/product/[productId]): Exibe os detalhes de um produto específico, incluindo imagens, descrição, preço e a opção de adicionar ao carrinho.
Carrinho de Compras (/cart): Mostra os itens adicionados ao carrinho e permite a finalização da compra.
2. Componentes
Header: Contém a navegação principal e logo. É fixo na página de detalhes do produto.
Sidebar: Permite filtrar produtos por categorias e realizar buscas específicas.
ProductCard: Exibe uma prévia dos produtos com título, preço e imagem.
ProductPage: Página de detalhes do produto com imagens principais e miniaturas.
CartPage: Página do carrinho de compras para visualizar e finalizar a compra.
3. Funcionalidades
Pesquisa Global: Permite aos usuários buscar produtos por título.
Filtro por Categoria: Os usuários podem filtrar produtos por categorias específicas usando a barra lateral.
Visualização de Detalhes do Produto: Exibe uma imagem principal do produto, miniaturas e detalhes adicionais.
Carrinho de Compras: Adiciona produtos ao carrinho e permite a visualização dos itens selecionados.
Responsividade: O site é responsivo e funciona bem em dispositivos móveis e desktop.
4. Produtos
Para a criação dos produtos foram utilizados um arquivo TypeScript(products.ts) para simular um banco de dados
   

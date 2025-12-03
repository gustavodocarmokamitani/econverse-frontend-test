# Econverse Frontend Test

Este projeto é uma implementação de uma interface de e-commerce como parte de um desafio de frontend para a Econverse. A aplicação é uma Single Page Application (SPA) desenvolvida com React e TypeScript, focada em apresentar produtos de forma moderna e interativa.

## 🚀 Características do Projeto

- **Framework Moderno:** Construído com **React** e **TypeScript**, garantindo um desenvolvimento robusto, tipado e escalável.
- **Estilização Modular:** Utiliza **SASS (SCSS)** com **CSS Modules**, permitindo a criação de estilos componentizados e evitando conflitos de classes.
- **Arquitetura Baseada em Componentes:** A interface é dividida em componentes reutilizáveis, facilitando a manutenção e o desenvolvimento.
- **Dados Estáticos:** As informações dos produtos são carregadas a partir de um arquivo `products.json` local, simulando o consumo de uma API.

## 🏛️ Arquitetura

O projeto segue uma arquitetura de componentização clara e organizada, com uma separação de responsabilidades bem definida.

- **`src/`**: Diretório raiz do código-fonte da aplicação.
  - **`components/`**: Contém todos os componentes reutilizáveis da UI (ex: `Header`, `Footer`, `Card`, `Product`, `Modal`). Cada componente possui seu próprio arquivo de lógica (`.tsx`) e de estilo (`.module.scss`).
  - **`Pages/`**: Abriga as páginas principais da aplicação. A página `Home.tsx` é responsável por montar o layout principal, organizando os diversos componentes.
  - **`data/`**: Armazena os dados estáticos da aplicação, como o `products.json`.
  - **`styles/`**: Inclui arquivos de estilo globais e variáveis SASS (`_variables.scss`), que definem a identidade visual do projeto (cores, fontes, etc.).
  - **`assets/`**: Contém todas as imagens, ícones e outros recursos estáticos.
  - **`types/`**: Define as interfaces TypeScript (`product.ts`) que garantem a tipagem e a consistência dos dados em toda a aplicação.
  - **`App.tsx`**: Componente raiz que renderiza a página principal e atua como ponto de entrada da aplicação.

## ✨ Funcionalidades

- **Navegação Principal:** Barra de navegação superior e principal com links e ícones.
- **Carrossel de Produtos:** Seção principal que exibe os produtos em um carrossel com navegação horizontal.
- **Modal de Detalhes do Produto:** Ao clicar em um produto, um modal é aberto exibindo informações detalhadas, como imagem, nome, preço e um seletor de quantidade.
- **Seções de Categoria:** Exibição de banners para diferentes categorias de produtos.
- **Newsletter:** Formulário para inscrição na newsletter.
- **Rodapé:** Apresenta informações adicionais e links úteis.

## 📝 Responsabilidades

As principais responsabilidades durante o desenvolvimento deste projeto foram:

- **Componentização:** Criar componentes React que sejam reutilizáveis, independentes e fáceis de manter.
- **Tipagem:** Utilizar TypeScript para garantir a segurança dos tipos, especialmente na manipulação dos dados dos produtos.
- **Gerenciamento de Estado Local:** Controlar o estado dos componentes (como a visibilidade do modal ou a quantidade de itens) utilizando React Hooks (`useState`, `useRef`).
- **Estilização Escalável:** Estruturar o SASS de forma organizada, utilizando variáveis e o padrão de CSS Modules para escopar os estilos.
- **Estrutura do Projeto:** Manter uma organização de arquivos e pastas que facilite a navegação e a compreensão do código.

## 🧠 Aprendizados

A realização deste projeto proporcionou uma excelente oportunidade para aplicar e aprofundar conhecimentos em tecnologias e conceitos essenciais do desenvolvimento frontend moderno:

- **Estruturação de um projeto React do zero:** Aplicação prática dos conceitos de `create-react-app` e organização de uma base de código limpa.
- **Componentização avançada:** Prática na criação de componentes funcionais e na comunicação entre eles através de `props`.
- **TypeScript em um ambiente React:** Fortalecimento do uso de interfaces para modelar dados e `props`, aumentando a previsibilidade e a robustez do código.
- **Técnicas de estilização com SASS e CSS Modules:** Experiência na criação de um sistema de design coeso com variáveis SASS e na prevenção de vazamento de estilos.
- **Manipulação de estado e eventos:** Uso prático de hooks como `useState` e `useRef` para criar interatividade e controlar o ciclo de vida dos componentes.
- **Simulação de consumo de API:** Compreensão de como trabalhar com dados locais (JSON) como uma alternativa para o desenvolvimento do frontend antes da integração com um backend.

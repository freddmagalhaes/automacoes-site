# 🚀 Site Institucional - AutomaçõesTec

E aí, pessoal! 👋 Bem-vindos ao repositório do site institucional da **AutomaçõesTec**! 

Este projeto foi construído do zero para ser a vitrine digital dos nossos dois sistemas principais: o **EduGestão Pro** (focado em escolas) e o **SmartMaint** (focado em indústrias). O objetivo principal aqui foi criar uma interface super minimalista, rápida, elegante e que passe uma imagem bem profissional e corporativa.

Foi um desafio muito massa porque decidimos fazer um design super *clean* focando em uma paleta de cores neutras (Branco, Azul Claro e Vermelho) usando apenas CSS puro para a base, mas o resultado final ficou incrível! 😄

---

## 💻 Tecnologias Utilizadas (Minha Stack Favorita!)

Para garantir que o site fosse rápido, moderno e fácil de dar manutenção, utilizei as seguintes tecnologias:

*   **[React 19](https://react.dev/)**: A biblioteca mais top para construir interfaces! E o melhor, na versão mais recente.
*   **[Vite](https://vitejs.dev/)**: Substituímos o antigo Create React App pelo Vite. Gente, o servidor de desenvolvimento abre em milissegundos, é muito rápido! ⚡
*   **[Framer Motion](https://www.framer.com/motion/)**: Para fazer aquelas animações suaves de entrada quando você rola a página ou troca de rota. Dá aquele toque "premium" no site.
*   **[React Router DOM v7](https://reactrouter.com/)**: Para gerenciar as páginas (Home, Educacional, Industrial, Preços) sem precisar recarregar o navegador inteiro (Single Page Application).
*   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones super leve e bonita que combinou muito com o estilo minimalista que a gente queria.
*   **Vanilla CSS**: Sim! Em vez de usar Tailwind, criamos nosso próprio sistema de design e variáveis no arquivo `index.css`. Aprendi muito sobre como estruturar a paleta usando `hsl`! 🎨

---

## 🌟 O que tem no projeto? (Funcionalidades)

O site está dividido nas seguintes páginas principais:

1.  **🏠 Home (`/`)**: A porta de entrada! Apresenta rapidamente quem somos e direciona o usuário para as duas verticais de negócio.
2.  **🎓 Educacional (`/educacional`)**: Página dedicada ao **EduGestão Pro**. Aqui a gente lista todas as vantagens, como a Visão Multi-tenant, Controle Acadêmico, Dashboard de RH (efetivos vs. designados) e Resumo Financeiro da verba.
3.  **🏭 Industrial (`/industrial`)**: Página focada no **SmartMaint**. Mostramos os indicadores de desempenho, Ordens de Serviço, Análise FMEA, Gestão de Ativos e nosso incrível Simulador R(t).
4.  **💰 Preços (`/precos`)**: Aqui o usuário pode ver os planos (Básico, Profissional e Enterprise) e tem um botão de *toggle* super legal (que deu um trabalhinho para alinhar a bolinha branca, mas consegui! 😅) para alternar entre planos Mensais e Anuais.

---

## 🛠️ Como rodar o projeto na sua máquina

Quer testar esse projeto localmente? É bem fácil, segue o passo a passo:

### 1. Pré-requisitos
Você vai precisar do **Node.js** e do **npm** instalados na sua máquina. (Eu recomendo sempre as versões LTS mais recentes).

### 2. Passo a Passo

Clone o repositório e entre na pasta:
```bash
git clone <url-do-repositorio>
cd automacoes-site
```

Instale todas as dependências mágicas do projeto:
```bash
npm install
```

Inicie o servidor de desenvolvimento (que é muito rápido, como eu já disse):
```bash
npm run dev
```

Abra o seu navegador e acesse **`http://localhost:5173/`**. Pronto! 🎉

---

## 🧠 O que eu aprendi neste projeto (Notas de um Dev)

Esse projeto foi um excelente aprendizado para mim! Alguns pontos que me deixaram orgulhoso:
- **CSS Customizado**: Conseguir aquele visual *clean* de agências caras sem depender de frameworks prontos me fez entender muito mais sobre variáveis CSS (`:root`) e como manter o código limpo.
- **Transições**: Entender como o `framer-motion` funciona junto com o React Router para fazer transições de página sem cortes bruscos.
- **Atenção aos Detalhes**: Descobri o quanto faz diferença alinhar bem os botões (como a bolinha do Toggle de preços) e o uso correto do `padding` e `margin`. Layout quebrado nunca mais! 💪

---

Feito com muito ❤️ e café ☕ pela equipe de AutomaçõesTec. Se encontrar algum bug, não hesite em abrir uma issue!

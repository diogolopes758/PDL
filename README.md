PDL — Plataforma de Estudos para ENEM
Sobre o projeto:
O PDL é uma plataforma de estudos desenvolvida com foco em estudantes do ENEM. O objetivo do projeto é oferecer um ambiente moderno, intuitivo e organizado para ajudar usuários a estudarem de forma mais eficiente.

A aplicação reúne diversas funcionalidades úteis para o dia a dia de estudos, como:

 Organização por matérias,
 Simulados,
 Timer Pomodoro,
 Dashboard de desempenho,
 Gráficos de evolução,
 Banco de questões e
 Área de redações

O projeto foi construído com foco em:

experiência do usuário,
organização de código,
componentização,
responsividade e
boas práticas em React


Deploy Online:
https://pdlpreparatorio.vercel.app/


Tecnologias utilizadas:
Front-end:
React,
Vite,
React Router DOM,
Recharts,
CSS Modules / CSS tradicional e
JavaScript

FUNCIONALIDADES:
Implementadas:
Sistema de navegação entre páginas,
Página Home moderna,
Página de matérias,
Cards com imagens e rotas individuais,
Página de simulados,
Página de redações,
Dashboard de desempenho,
Gráficos de evolução,
Sistema Pomodoro,
Mini cronômetro global,
Banco local de questões, com complemento de JSON externo e fallback local,
Layout responsivo e
Organização em componentes

EM DESENVOLVIMENTO:
Sistema de login,
Salvamento de progresso,
Banco de dados,
Estatísticas reais do usuário,
Correção automática de redações,
Ranking de desempenho,
Modo escuro/claro,
API externa com rotas próprias de questões,

Objetivos do projeto:

Este projeto foi criado com o objetivo de:

praticar React na construção de aplicações reais,
aprofundar conhecimentos em front-end,
desenvolver arquitetura de componentes,
criar um produto funcional e escalável e
construir um portfólio profissional


👨‍💻Autor
Diogo Lopes
GitHub: https://github.com/diogolopes758
LinkedIn: [adicione aqui](https://www.linkedin.com/in/diogo-lopes-462192223/?skipRedirect=true)

Considerações finais:

O PDL é um projeto em constante evolução. Novas funcionalidades e melhorias serão adicionadas continuamente conforme o desenvolvimento da plataforma avança.

Feedbacks e sugestões são sempre bem-vindos.


Banco de questões:

A página /questoes combina pdl/public/questoes.json com o arquivo estático
https://raw.githubusercontent.com/diogolopes758/enem-questoes-api/main/questoes.json.
As fontes são adaptadas para o formato da interface. Se a fonte externa falhar,
o banco local continua disponível e a página informa a falha. O arquivo externo
é JSON estático; não há API de filtros ou paginação no servidor. Os gabaritos
numéricos dos dois arquivos usam índices a partir de zero; o banco local também
aceita letras. Conteúdo e gabaritos ainda precisam de revisão editorial.

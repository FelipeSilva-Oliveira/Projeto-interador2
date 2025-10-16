OBS: alguns arquivos ja contem codigo, porque foram gerados com "npx", nao necessariamente precisa usar o codigo contido neles

TAREFAS:
-NODE.JS - backend
    API / Comunicação com o frontend
       -Criar rotas no Express que retornem dados em JSON.
       -Receber requisições do React (ex.: buscar usuários, autenticar login, salvar dados).

    Integração com o banco de dados (MySQL - Google Cloud)
       -Migrar o SQLite para MYsql e caso precise, fazer atualização, normalização(usando ferramente CASE), criar indices, etc
       -Criar/exportar o BD para nuvem.
       -Conectar ao banco remoto usando string de conexão (host, porta, usuário, senha).
       -Executar consultas (CRUD → Create, Read, Update, Delete).
       -Garantir segurança (SQL Injection, uso de queries, etc.).

     Autenticação e segurança(PI3 - opcional caso haja tempo)
       -Criar sistema de login/registro.
       -Criar uma pagina agradavel para alteraçoes do BD.
       -Gerenciar tokens de sessão (JWT, por exemplo).
       -Proteger rotas privadas.(/admin, em vez de criar um botao de login)
  -----------------------------------------------------------------------
-REACT - frontend
     Interface com o usuário (UI)
       -Construir telas amigáveis e fáceis de usar.
       -Garantir que a navegação seja clara (menus, rotas, contatos, etc).

     Acessibilidade
       -Usar semântica correta no HTML (ex.: <button>, <nav>, <header>).
       -Garantir navegação por teclado e leitores de tela.
       -Usar contrastes de cores adequados(mínimo 4.5:1 para texto normal e 3:1 para texto grande ≥ 18px em negrito).
       -Textos alternativos em imagens("alt:").
       -Uso de etiquetas claras em formulários.
       -Garantir espaçamento entre linhas (line-height de pelo menos 1.5 para corpo de texto).  
       -Usar "aria-label="quando o HTML sozinho não descreve bem o elemento.(EX:botão).    

     Experiência do usuário (UX)
      -Criar componentes reutilizáveis (botões, cards, formulários).
      -Garantir feedback rápido ao usuário (mensagens de erro).
      -Responsividade (funcionar bem no PC e celular).
      -Garantir um design atraente, intuitivo e agradável para interagir e visualizar.

     Consumo da API do backend
      -Fazer chamadas para o Node.js (via fetch ou axios).
      -Mostrar os dados recebidos do banco (ex: modalidades).
      -Enviar dados para o backend (ex: cadastro de formulário(PI3)).
	
     API Maps JavaScript(mapa interativo)
      -Instalar o pacote oficial ou usar script direto no HTML.
      -Criar o mapa(largura, altura, localizaçao, etc).
      -Exibir o mapa(escolhe qual pagina ficara).
      -Criar uma conta no Google, acesssar o google cloud console e configurar um projeto para obter a chave de acesso à API do Google Maps.   
      -Restrigir a chave para garantir a segurança(restriçao de aplicativo, dominio, etc).
      -Limitar o numero de requisições para não gerar cobranças.
      -Criar uma variavel de ambiente no arquivo ".env" para guardar a API key.

     Testes de acessibiliade:
      -Usar o WAVE(Web Accessibility Evaluation Tool) para apontar erros gerais de acessibilidade.
      -Verificar a conformidade do site com os padrões globais de acessibilidade WCAG (Web Content Accessibility Guidelines).
      -Usar o Color Contrast Analyser para verificar a relação de cores.
      -Utilizar a ferramenta NVDA, um leitor de tela gratuito para Windows,amplamente usado por pessoas com deficiência visual, para 
        assegurar uma navegação acessível e eficiente no site.
       

CUIDADOS:
    -Sempre antes de "codar" ou editar alguma coisa, sempre dar "git pull origin main" para estar sempre na versao mais atualizada.

    -Sempre commitar na branch correta, por exemplo: atualizou o backend, commitar na branch especifica para o backend, quando for 
     passar para a principal usar "merge request", mas sempre garantir que o codigo estar correto e funcionando.

    -Verificar antes de instalar um pacote se e o pacote ja esta instalado.

    -Faça commits pequenos e frequentes, não um commit gigante com tudo.

    -Usar o "npm install" para adicionar um pacote.

    -usar "npm install" para baixar as depedencias, para rodar em qualquer maquina.

FRAMEWORKS:
    Express - Facilita a criação de aplicações web e APIs, oferecendo uma forma simples de gerenciar rotas, requisições e respostas.
     Ele simplifica o trabalho com servidores HTTP, tornando o desenvolvimento mais rápido e organizado.

APIs:
    google maps JavaScript - É uma API do Google que permite integrar mapas interativos em sites e aplicações web.

BIBLIOTECA:
    React - Biblioteca para construção de interfaces de usuário em JavaScript. Facilita criar componentes reutilizáveis, 
    atualizar a interface de forma reativa e organizar aplicações frontend.

    dorenv - gerenciar variáveis de ambiente. Permite guardar dados sensíveis (senhas ou API key) em um arquivo ".env" e 
    acessá-los no código. (deve ficar sempre no .gitignore)

    nodemon - Reinicia automaticamente o servidor sempre que algum arquivo do projeto é alterado. foi usado a 
    dependencia "--save-dev" indica que essa dependência não é necessária em produção, apenas durante o desenvolvimento.

FERRAMENTAS:
    Vite - O Vite é uma ferramenta de build e servidor de desenvolvimento rápido para React. Ele proporciona carregamento 
    quase instantâneo, suporte nativo a módulos modernos e uma configuração simples, tornando o processo de desenvolvimento 
    mais ágil e eficiente em comparação ao Create React App.

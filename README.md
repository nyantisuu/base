# Nyantisuu!
<img src="https://raw.githubusercontent.com/Nyantise/Nyantise/main/assets/nyantisuuBanner.png"/>


Um bot para Discord com integração API (controle seu próprio bot via requisições HTTP). Possui app client em Flutter e Vue.js (ambos em desenvolvimento) => [Repositório](https://github.com/Nyantise/nyantisuu-front).<br/>
Documentação feita com Vitepress, podendo ser acessada neste [link](https://nyantisuu.netlify.app).

As tecnologias usadas foram: Nest, Typescript, PrismaORM, PostgreSQL, Commander, GoogleAPI e [Discord.JS](https://discord.js.org).
- Classes construtoras e seletoras, arquitetura, organização e clareza de código que é difícil encontrar em tutoriais e documentação relacionados a criação de discord bots.
- envia textos simultâneos em canais e servidores múltiplos, atualiza conteúdo, envia mensagens temporárias, apaga múltiplas mensagens, etc.
- Consegue salvar arquivos na nuvem (Atualmente apenas via API Google Drive).
- Consegue reproduzir sons salvos na nuvem e nos servidores do Discord.
- CLI via commander para automação via shellscript etc (esse foi o principal motivo para eu ter criado o bot).


### A ideia nasceu do Minecraft! 
<img align="left" width="240px" src="https://i.imgur.com/k4Fu7T3.gif"/>
Tudo começou com um servidor que eu criei, com o passar dos dias fui criando shellscripts e automações como:<br>
- Backup.<br>
- Abrir portas.<br>
- Criação de um CLI para iniciar o servidor etc.<br>

Acabou vindo a ideia de automatizar o status num servidor de discord com meus amigos (mostrando se estava online, qual foi o ultimo momento de funcionamento e o ultimo backup) e a solução para isso foi a criação do Nyantisuu!
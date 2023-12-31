# Nyantisuu!
<img src="https://raw.githubusercontent.com/Nyantise/Nyantise/main/assets/nyantisuuBanner.png"/>


Uma Framework TS para criação de Discord e Telegram Bots com integração API (controle seu próprio bot via requisições HTTP). Possuirá app client de exemplo feito em Flutter (em desenvolvimento) - [Repositório](https://github.com/Nyantise/nyantisuu-client).<br/>

Para guia de instalação, configuração e documentação, acesse este [link](https://nyantisuu.netlify.app).

## Sobre
As tecnologias usadas foram: Express, Typescript, PrismaORM, PostgreSQL, Gluegun.
- Possui baseado em classes, arquitetura, organização e clareza de código que é difícil encontrar em tutoriais e documentação relacionados a criação de discord bots.
- Envia textos simultâneos em canais e servidores múltiplos, atualiza conteúdo, envia mensagens temporárias, apaga múltiplas mensagens, etc.
- Possui CLI via commander para automação via shellscript etc (esse foi o principal motivo para eu ter criado o bot).

## Checklist
- [x] Builder para helpers ().
- [ ] Builder para comandos e subcomandos.
- [ ] Builder para rotas API.
- [ ] Builder base para Actions.
- [x] Selector para Servidores e Canais.
- [ ] Selector para Users e Cargos.
- [ ] Builder para Watchers.
- [ ] Reformular command e helper Builders para terem uma integração autamatizando o helper builder.

### Legenda
- **Builder** - Classes construtoras, elas podem consumir outras bibliotecas ou não, elas trazem uma sintaxe ainda mais facilitada e podem construir qualquer coisa, desde botões, fila de botões para enviar em um embed do discord até mesmo criar novos comandos para o bot.
- **Selector** - Classes feitas principalmente para consumir funções confusas e complicadas. Seu uso resume-se a selecionar algo, desde servidores que o seu bot tem acessos a users e canais dentro deles.
- **Watcher** - Classes usadas para criar Observadores de eventos, usados principalmente para criar funções e ações Event-Driven, Exemplo de evento (Um novo user entrou no servidor).
- **Actions** - Nada mais que Ações que o bot performa, querendo ou não as bibliotecas não trazem algo mais direto, Nyantisuu! da um wrap nessas bibliotecas e te entrega essas coisas prontas, com o Nyuu é tão simples quanto:
<img src="https://raw.githubusercontent.com/Nyantise/Nyantise/main/assets/nyantisuuExample.png"/>


### A ideia nasceu do Minecraft!
Tudo começou com um servidor que eu criei, com o passar dos dias fui criando shellscripts e automações como:<br>
- Backup na nuvem.<br>
- Abrir portas.<br>
- Criação de um CLI para iniciar o servidor etc.<br>

Acabou surgindo a ideia de automatizar o status num servidor de discord com meus amigos (mostrando se estava online, qual foi o ultimo momento de funcionamento e o ultimo backup) e a solução para isso foi a criação do Nyantisuu!

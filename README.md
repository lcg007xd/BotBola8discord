# BotBola8discord
Bot de bola8 para discord, feito com javascript
Primeira coisa a se fazer é criar o bot, primeiramente, faça login no seu discord (discord web), depois, va para https://discord.com/developers/applications e clique
em "New aplication", no canto superior direito, escreva o nome do bot, clique em "bot" , "add bot" (obs: o nome do seu bot nao pode ja ter sido usado), abaixo de "username" clique em "click to reveal token", depois em "copy" (guarde esse token!!!). Para adicionar o bot no server, clique em OAuth2, marque a caixa "bot", copie o link e cole em seu navegador, depois só escolher em qual server o bot será adicionado.
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Para rodar o códiego é necessário ter instalado:
1. Node.js (https://nodejs.org/en/download/)
2. Biblioteca discord.js (abra o cmd e digite "npm install discord.js", sem as aspas, necessário instalar o node.js primeiro)
3. Visual Studio Code (https://code.visualstudio.com/download)
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Após instalar tudo (reiniciar é opcional, porém, recomendado), baixe o arquivo .zip com os arquivos, extraia-os
para uma pasta qualquer. Abra o Visual Studio Code, clique em "file" no canto superior direito, depois em "Open foler", selecione a pasta onde os arquivos estão, nas esquerda, clique duas vezes em "index.js", na terceira linha estará client.login(''), coloque o token que você copiou dentro das aspas simples, ficando assim: client.login('TOKEN'), dê um "ctrl + s", depois "ctrl + aspas simples" (aspas simples ficam geralmente a esquerda do número), dentro do terminal, escreva "node ." (com o espaço mesmo).
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Comandos do bot:
!bola8 *sua pergunta* (A resposta é aleatória, então poderam cair tanto resultados positivos, quanto negativos) 
!manipularBola (Irão cair somente respostas negativa)
!desmanipularBola (A Bola8 volta ao normal.

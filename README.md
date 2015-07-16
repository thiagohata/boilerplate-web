# Boilerplate-web

Esse é o Boilerplate, scaffolding que uso para starta meus projetos.

**Depedências:**

- [Ruby](https://www.ruby-lang.org/pt/)
- [Node.js](https://nodejs.org/)
- [Bower](http://bower.io/)
- [Grunt](http://gruntjs.com/)
- [Sass](http://sass-lang.com/)


Pensando que já tem as depedências instaladas na máquina.

**Modo de usar:**

1 - Clone o repositório ou faça o download.

2 - Acesse via terminal o diretório clonado ou baixado.

3 - No terminal instale os módulos necessários para o projeto.

	$ [sudo] npm install

4 - Rode o servidor:

	$ grunt server

5 - Para gerar os arquivos (concatenados, minificados, sprites, versionados e otimizados )
	
	$ grunt


## Como foi desenvolvido esse Boilerplate.

Criei esse scaffolding para startar projetos que utilizo para web. Depois de usar muitos Boilerplate /scaffolding  prontos por ai, algumas vezes faltavam coisas ou as vezes tinham muita coisa, resolvi fazer um Boilerplate para atender as minhas necessidades quando inicio algum projeto web. Esse Boilerplate atende as minhas necessidades espero poder ajudar mais pessoas com ele.


## Bibliotecas

Utilizo algumas bibliotecas básicas que me auxiliam e me dão rapidez. 

As depedências são controladas pelo **Bower**

**jQuery:** Usado pela facilidade e rapidez que proporciona a um projeto crossbrowser.

** Modernizr:** Para detectar e tratar features CSS3 e HTML5.

**Bootstrap:** Adicionado em 16 de julho de 2015 com uma sintaxe SASS permitindo usar apenas o necessário e remover o que não for usado.

** Jasmine:** Criar os teste unitários da aplicação.


As bibliotecas básicas que uso são essas. Fique a vontade de remover e adicionar bibliotecas.



## Estrutura de Arquivos

**/app** 
Onde ficam os arquivos de produção. 

**/bower_components:** Onde ficam os arquivos de vendor, biblioteca de terceiros que ajudam no projeto.

**/dist** Os arquivos finais compilados (concatenados, minificados, otimizados, versionados.. )

**/node_modules** módulos que o grunt requer para realizar suas tarefas.

**/spec** Pasta onde ficam os testes  criados para aplicação.







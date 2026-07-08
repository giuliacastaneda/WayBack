# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na Internet 
- Navegador da Internet - Chrome, Firefox ou Edge.

Os testes funcionais a serem realizados na aplicação são descritos a seguir. 

|Caso de Teste    | CT-1 - Verificar o login de usuários |
|:---|:---|
| Requisitos Associados | RF-06: O sistema deve possibilitar o login do usuário. |
| Objetivo do Teste | Verificar se o usuário consegue entrar em sua conta com o nome de usuário e a senha cadastrados. |
| Passos | 1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br> 3) Clicar em "Login" no menu de navegação. <br>4) Preencher os campos de e-mail e senha.<br> 5) Clicar no botão de "Login". |
| Critérios de êxito | Após o login com dados corretos, deverá aparecer a mensagem de "Login bem-sucedido!" e o usuário será redirecionado para a sua página de perfil.  |
| Responsável pela elaboração do caso de Teste | João Victor Ambrósio |
<hr>

|Caso de Teste    | CT-2 - Verificar o cadastro de usuários |
|:---|:---|
| Requisitos Associados | RF-01: O sistema deve permitir o cadastro de usuário e perfil sem especificação de endereço físico ou outros dados pessoais. |
| Objetivo do Teste | Verificar se o cadastro está ocorrendo corretamente sem dados pessoais específicos. |
| Passos | 1) Acessar o Navegador. <br> 2) Informar o endereço do Site <br> 3) Clicar em "Login" no menu de navegação. <br>4) Clicar na opção "Cadastre-se" no campo inferior ao login. <br> 5) Preencher os campos disponíveis.<br> 5) Clicar no botão de "Cadastre-se".|
| Critérios de êxito | Após o cadastro, deverá aparecer a mensagem "Cadastro enviado!". |
| Responsável pela elaboração do caso de Teste | Giulia Castañeda Pereira |
<hr>

|Caso de Teste    | CT-3 - Verificar filtragem de objetos|
|:---|:---|
| Requisitos Associados | RF-03: O sistema deve possibilitar a criação de filtros de busca para agilizar e restringir a área de procura. |
| Objetivo do Teste | Verificar se o filtro de pesquisa de itens agiliza o processo e se é funcional. |
| Passos | 1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br>  3) Realizar login no Site. <br> 4) Clicar em "Procurar Objetos" no menu de navegação. <br>5) Preencher um ou mais campos do filtro. <br> 6) Clicar no botão de "Pesquisar". |
| Critérios de êxito | As informações inseridas no filtro devem retornar publicações de itens especificos na parte inferior da página, condizente com o solicitado no filtro. |
| Responsável pela elaboração do caso de Teste | Vinícius Claret Nunes  |
<hr>

|Caso de Teste    | CT-4 - Verificar cadastro de itens |
|:---|:---|
| Requisitos Associados | REF:05- O sistema deve permitir o cadastro do item com foto e descrição. |
| Objetivo do Teste | Verificar se o cadastro de itens pede foto e descrição. |
| Passos |  1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br> 3) Logar no Site. <br> 4) Clicar em "Publicar Objetos" no menu de navegação. <br> 5) Preencher todos os campos do cadastro. <br> 6) Clicar no botão de "Publicar". |
| Critérios de êxito | O item deverá ser cadastrado com as informações fornecidas, foto e descrição.  |
| Responsável pela elaboração do caso de Teste | Gustavo Henrique |
<hr>

|Caso de Teste    | CT-5 - Verificar opção de denunciar item |
|:---|:---|
| Requisitos Associados | RF-04: O sistema deve permitir a possibilidade de denunciar um anúncio inapropriado ou irregular. |
| Objetivo do Teste | Verificar a opção de denunciar objeto nos itens publicados. |
| Passos |  1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br> 3) Realizar login no Site. <br> 4) Clicar em "Procurar Objetos" no menu de navegação. <br>5) Escolher um objeto por filtragem ou entre os recentes em visualização na tela. <br> 6) Acessar item ao clicar dentro da postagem desejada. <br> 7) Clicar no botão de "Reportar" no canto inferior da publicação. |
| Critérios de êxito |  Deverá aparecer a mensagem "Você deseja reportar o item?" Ao clicar em confirmar o item será reportado. |
| Responsável pela elaboração do caso de Teste | Gabriel Fernando dos Santos |
<hr>

|Caso de Teste    | CT-6 - Verificar chat assíncrono |
|:---|:---|
| Requisitos Associados | RF-02: O sistema deve permitir chat assíncrono entre o *Seeker* e o *Finder* para discutirem sobre o objeto, inclusive suas características básicas feita pelo *Seeker*. |
| Objetivo do Teste | Verificar a opção de chat assíncrono entre os usuários. |
| Passos |  1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br> 3) Realizar login no Site. <br> 4) Clicar em "Procurar Objetos" no menu de navegação. <br>5) Escolher um objeto por filtragem ou entre os recentes em visualização na tela. <br> 6) Acessar item ao clicar dentro da postagem desejada. <br> 7) Clicar no botão de "Conversar com *Finder*". <br> 8) Selecionar chat do objeto desejado. <br> 9) Enviar mensagem para o *Finder* sobre o objeto.|
| Critérios de êxito |  Deverá aparecer a tela de chat com conversa assíncrona entre os usuários.|
| Responsável pela elaboração do caso de Teste | Giulia Castañeda Pereira |
<hr>

|Caso de Teste    | CT-7 - Verificar visualização de itens |
|:---|:---|
| Requisitos Associados | RF-07: O sistema deve permitir a visualização da descrição detalhada do objeto para o *Seeker*. |
| Objetivo do Teste | Verificar se possui visualização detalhada de itens, com sua foto e informações do item.|
| Passos | 1) Acessar o Navegador. <br> 2) Informar o endereço do Site. <br> 3) Realizar login no Site. <br> 4) Clicar em "Procurar Objetos" no menu de navegação. <br>5) Escolher um objeto por filtragem ou entre os recentes em visualização na tela. <br> 6) Acessar item ao clicar dentro da postagem desejada.|
| Critérios de êxito | Deverá carregar uma página com detalhes específicos do item publicado, como fotos, local, data e outras informaçoes fornecidas pelo *Finder*.  |
| Responsável pela elaboração do caso de Teste | João Victor Ambrósio Martins |

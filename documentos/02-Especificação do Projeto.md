# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 01: Finder </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Pessoa que encontra algum objeto e não conhece previamente o dono.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 1. Criar perfil de usuário;<br>
  2. Cadastrar, no sistema web, o item que encontrou;<br>
  3. Contactar o dono deste objeto;<br>
  4. Guardar o item em segurança até sanar o problema;<br>
  5. Devolver o objeto encontrado.</td>
</tr>
</tbody>
</table>

<table>
<tbody>
<tr align=center>
<th colspan="2">Perfil 02: Seeker </th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px"> Pessoa que perdeu algum objeto e não sabe quem o encontrou.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td> 1. Criar perfil de usuário;<br>
  2. Filtrar objetos;<br>
  3. Contatar quem o achou;<br>
  4. Acesso rápido e fácil na recuperação do item;<br>
  5. Recuperar o objeto perdido.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

Com base na análise dos perfis foram identificadas as seguintes histórias de usuários:

|EU COMO... `PERFIS`   | QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|---------------------------|----------------------------------|
| Finder | devolver o item perdido ao seu dono | contribuir moral e legalmente|
| Finder | ter flexibilidade no momento de procurar o proprietário do objeto perdido| não precisar recorrer a métodos atuais porque são burocráticos ou pouco eficazes |
| Finder | ter maior agilidade no ato de publicar/cadastrar o item encontrado | evitar lentidão neste processo, ganhando maior praticidade |
| Seeker | encontrar o item perdido sem a necessidade de se expor| evitar a possibilidade de vazamentos de dados pessoais |
| Seeker | ser notificado por mensagem quando alguém encontrar o objeto| não precisar procurar constantemente nas redes sociais ou na rádio local |
| Seeker | visualizar os itens com descrição | poder identificar o seu próprio item de forma mais rápida e eficaz |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|---------|---------------------------------|----|
| RF-01 |O sistema deve permitir o cadastro de usuário e perfil sem especificação de endereço físico ou outros dados pessoais.|ALTA| 
| RF-02 |O sistema deve permitir chat assíncrono entre o Seeker e o Finder para discutirem sobre o objeto, inclusive suas características básicas feita pelo Seeker.|ALTA| 
| RF-03 |O sistema deve possibilitar a criação de filtros de busca para agilizar e restringir a área de procura.|MÉDIA| 
| RF-04 |O sistema deve permitir a possibilidade de denunciar um anúncio inapropriado ou irregular.|MÉDIA| 
| RF-05 |O sistema deve permitir o cadastro do item com foto e descrição.|ALTA| 
| RF-06 |O sistema deve possibilitar o login do usuário.|ALTA| 
| RF-07 |O sistema deve permitir a visualização da descrição detalhada do objeto para o Seeker.|MÉDIA| 
| RF-08 |No cadastro de senha, ela deverá cumprir os seguintes requisitos: um número, uma letra maiúscula, uma letra minúscula e, no mínimo, 8 caracteres.|ALTA| 

**Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 |O sistema deverá ser feito em HTML, CSS e na linguagem JavaScript.|ALTA| 
| RNF-02 |O sistema deverá ser responsivo, principalmente para celulares e desktop.|ALTA| 
| RNF-03 |O sistema deverá ser carregado no browser do usuário em até 5 segundos.|MÉDIA| 
| RNF-04 |Para usabilidade, o sistema terá modo escuro a ser aplicado a critério do usuário.|BAIXA| 
| RNF-05 |FAQ com foco em um canal com dúvidas e respostas  pré-estabelecidas para auxiliar os usuários.|MÉDIA| 
| RNF-06 |Sobre a disponibilidade do sistema, deverá ficar disponível 99% do tempo.|ALTA|
| RNF-07 |O  sistema deverá seguir rigorosamente a Lei Geral de Proteção de Dados (LGPD) ou outra Lei em vigor.|ALTA| 

**Prioridade: Alta / Média / Baixa. 


# Registro de Testes de Software

Os resultados dos testes funcionais realizados na aplicação são descritos a seguir.

|Caso de Teste    | CT-1 - Verificar o login de usuários|
|:---|:---|
| Responsável pela execução do caso de Teste | João Victor Ambrósio|
| Resultados obtidos | Login realizado com sucesso. O sistema solicita o e-mail e a senha previamente cadastrados e caso algum dado esteja incorreto, é exibida uma mensagem de erro. <br>Abaixo do campo de senha, são apresentados os requisitos necessários para sua validação, com atualização em tempo real conforme a digitação.|

https://github.com/user-attachments/assets/73c9fe12-feb9-4e70-a5b1-adcd7734c1c7

Após realizado o Login, os dados ficam armazenados no LocalStorage.

![localstorage](https://github.com/user-attachments/assets/498ff7f6-4a62-47ff-9f0d-12adf4236f44)

<hr>

|Caso de Teste    | 	CT-2 - Verificar o cadastro de usuários |
|:---|:---|
| Responsável pela execução do caso de Teste | Giulia Castañeda Pereira |
| Resultados obtidos | O cadastro foi realizado com sucesso. Quando algum campo obrigatório não é preenchido, o sistema solicita corretamente o preenchimento antes de permitir o envio. <br> Segue abaixo a evidência de teste com todos os dados preenchidos e o cadastro concluído com êxito.  |

https://github.com/user-attachments/assets/0397405e-5911-46b8-9e83-f379b0b41a65
  <hr>
  
|Caso de Teste    | CT-3 - Verificar filtragem de objetos|
|:---|:---|
| Responsável pela execução do caso de Teste | Vinícius Claret Nunes|
| Resultados obtidos | O sistema de filtragem possui opções variadas para filtragem específica e exibiu corretamente os itens de acordo com o filtro selecionado. <br>Nenhum item fora do critério de filtragem foi exibido e a filtragem foi aplicada dinamicamente, sem necessidade de recarregar a página.  |

https://github.com/user-attachments/assets/785c906a-674f-4be1-a5f7-7409850ca498

<hr>

|Caso de Teste    | CT-4 - Verificar cadastro de itens|
|:---|:---|
| Responsável pela execução do caso de Teste | Gustavo Henrique|
| Resultados obtidos | O sistema permite o cadastro de itens com sucesso, desde que todos os campos obrigatórios estejam devidamente preenchidos. Ao tentar enviar o formulário com informações faltando, o sistema exibe mensagens de validação solicitando o preenchimento correto. <br>O sistema também permitiu o envio de imagens, seleção de categorias, localização e descrição do objeto. |




https://github.com/user-attachments/assets/41452c36-9e4f-4af8-9bc9-783be20b0b25


Após o envio, o item é exibido na listagem de itens publicados com todas as informações cadastradas, confirmando que os dados foram salvos corretamente.
![filtro bone](https://github.com/user-attachments/assets/4d270714-2b5a-4e62-b078-ee550c52cb4f)

<hr>

|Caso de Teste    | CT-5 - Verificar opção de denunciar item|
|:---|:---|
| Responsável pela execução do caso de Teste | 	Gabriel Fernando dos Santos|
| Resultados obtidos | O sistema disponibiliza a opção de reportar anúncios identificados como inapropriados ou irregulares. A funcionalidade está acessível ao usuário e permite o envio da denúncia com sucesso.  |

https://github.com/user-attachments/assets/d755da98-2522-4698-9e90-81e19c75cd30
<hr>

|Caso de Teste    | CT-6 - Verificar chat assíncrono|
|:---|:---|
| Responsável pela execução do caso de Teste | Giulia Castañeda Pereira|
| Resultados obtidos | O sistema permite a troca de mensagens assíncronas entre os usuários de forma eficiente e clara. As mensagens são enviadas e recebidas corretamente, com atualização em tempo real sem necessidade de recarregar a página.<br> Mensagens enviadas ficam visíveis para o remetente imediatamente e são recebidas pelo destinatário mesmo quando ele acessa o chat posteriormente. |

https://github.com/user-attachments/assets/f1f088aa-f271-48c6-af40-74563c53c422
<hr>

|Caso de Teste    | CT-7 - Verificar visualização de itens|
|:---|:---|
| Responsável pela execução do caso de Teste | João Victor Ambrósio Martins|
| Resultados obtidos | O sistema exibe corretamente a visualização e descrição detalhada dos itens cadastrados ao clicar em um item específico. As informações principais são apresentadas de forma clara e organizada.|

https://github.com/user-attachments/assets/b8b1bdb0-e9eb-4222-b2ee-8ac507d52f06
<hr>

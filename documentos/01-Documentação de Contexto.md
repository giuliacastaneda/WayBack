# Introdução

Diversas pessoas perdem objetos em locais públicos, como parques, praças, ônibus, escolas e shoppings, perdas que são muito comuns e que costumam gerar transtornos significativos ao indivíduo, já que a recuperação costuma ser difícil. Isso é corroborado pela pesquisa realizada no Governo do Estado do Ceará no ano de 2024, em que “767 itens e documentos perdidos nos trens e estações, entre janeiro e junho, 196 foram resgatados por seus proprietários, o que resulta em índice de 25%” (Ceará, 2024).

Esses departamentos de achados e perdidos costumam guardar itens de diversos tipos e origens, podendo possuir valor sentimental, como fotos, cartões de memória, objetos pessoais importantes e até objetos de maior valor financeiro, como celulares, instrumentos e carteiras. Porém, não são todos os locais que possuem esse setor específico para guardar os objetos encontrados e uma forma para encontrar os donos. Assim se mostra necessário um sistema mais atual, eficaz e prático de gerenciamento para recuperação dos pertences pelos proprietários.

## Problema

A perda de objetos pessoais em locais públicos é um problema comum, mas raramente conta com uma solução eficaz, pois a recuperação desses objetos costuma ser difícil, já que nem sempre há um sistema organizado e centralizado para registrar e devolver os itens encontrados.
 
Por outro lado, quem encontra possivelmente não conhece suas obrigações como cidadão, podendo implicar a responsabilidade civil prevista no ordenamento júurídico brasileiro. Isso é confirmado pelo Código Civil, no seu artigo 1.233, que especifica o dever daquele que encontra um objeto sem dono: 
“Quem quer que ache coisa alheia perdida há de restituí-la ao dono ou legítimo possuidor. Parágrafo Único: não o conhecendo, o descobridor fará por encontrá-lo, e, se não o encontrar, entregará a coisa achada à 
autoridade competente” (BRASIL, 2002).

Quem perde algo enfrenta frustração e incerteza, enquanto quem encontra nem sempre sabe como devolver. Ambientes movimentados e a pressa do dia a dia agravam o problema, dificultando a comunicação entre quem perde e quem acha. A falta de um sistema unificado que conecte quem encontra os itens e seus proprietários se mostra um obstáculo para essa recuperação e, atualmente, os 4 processos existentes são fragmentados e pouco divulgados, resultando em baixos índices de devolução de itens perdidos.


## Objetivos

O objetivo deste projeto é desenvolver uma aplicação web que centralize o registro de achados e perdidos, facilitando a comunicação entre a pessoa que encontra algum objeto "Finder" e a pessoa que perde o mesmo "Seeker". Esse sistema possibilitará o registro de objetos encontrados ou perdidos, denominados como objetos perdidos, em locais públicos com a intenção de o objeto retornar para seu dono original. Tudo isso será realizado por meio de uma plataforma com cadastro simples aos usuários, sem burocratização.

Sobre os objetivos secundários, podemos elencar:
* Notificar o "Seeker" que o item foi encontrado;
* Facilitar o contato seguro entre "Finder" e "Seeker";
* Centralizar a maneira de busca por objetos perdidos na aplicação web.


## Justificativa

A implementação de uma plataforma web dedicada permite que indivíduos registrem itens perdidos ou encontrados, facilitando a comunicação entre as partes envolvidas e aumentando as chances de devolução. Além disso, este sistema pode padronizar procedimentos de recuperação em diferentes locais públicos do país, promovendo uma abordagem padronizada, organizada e eficaz na gestão de objetos perdidos.

De acordo com o gráfico abaixo, diante da pergunta: "Se você perdeu algum objeto, quais foram as suas atitudes ao ter ciência da situação?", aproximadamente 90% das pessoas utilizaram o método: "perguntar às pessoas no último local visto e detalhar como era o objeto". Contudo, a taxa de solução é muito baixa, como já demonstrado anteriormente na notícia feita pelo Governo do Estado do Ceará.

<figure> 
  <img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2025-1-e1-proj-web-t4-way-back/blob/main/documentos/img/graficosituacoes.png"/>
  <figcaption>Figura 1 – Distribuições de atitudes feitas pelo "Seeker" ao perder o seu objeto</figcaption>
</figure> 

Portanto, o projeto atacaria o ponto principal que seria trazer um suporte às pessoas que passam por situações similares para devolução ou procura, facilitando a comunicação por meio do sistema web, trazendo consigo maior agilidade para este processo.

## Público-Alvo

O público-alvo deste sistema web é para quem perde ou encontra objetos físicos, não incluindo: bebidas, itens ilegais, dinheiro, animais etc. Isto é, os principais interessados serão:

* Usuários que perderam objetos: Indivíduos que esqueceram ou extraviaram pertences em locais públicos e buscam uma forma eficiente de recuperá-los.
* Usuários que encontraram objetos: Pessoas que localizaram itens perdidos e desejam devolvê-los aos proprietários legítimos.

Dessa forma, o sistema visa conectar esses usuários de maneira prática e segura, facilitando a devolução de itens perdidos.

Para delinear os problemas e encontrar as soluções, foi realizada uma pesquisa de autoria própria pela equipe deste projeto. Com isso, constatou-se que aproximadamente 60% das pessoas nunca conseguiram devolver o item e apenas 3 pessoas em uma amostra de 21 indivíduos utilizaram a internet para resolver a situação, de acordo com a tabela a seguir.

| Situações  |Quantidade |
|-------------------------|----|
| Infelizmente, nunca consegui achar/devolver o objeto. | 13 | 
| A polícia intermediou a situação. | 2 | 
| Nós encontramos por meio de anúncios nas redes sociais. | 3 | 
| Entrei em contato e me foi devolvido o objeto. | 1 |
| A pessoa voltou procurando e eu ainda estava lá. | 2 | 

Fonte: Elaborado pelos Autores (2025)

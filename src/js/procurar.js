import {ItensAPI} from "../js/manipularFetch.js";
import {ModalErro} from "../js/manipularFetch.js";

const query = window.location.search;
document.addEventListener("DOMContentLoaded", async () => {
    const resposta = await fetch("https://6801402081c7e9fbcc420482.mockapi.io/objeto");
    if (resposta.ok) {
        const dadosJSON = await resposta.json();
        if (!query) {
            manipulacaoInicialJSON(dadosJSON);
        } else {
            await resultadoPesquisa(dadosJSON);
            window.location.hash = "final-da-pagina";
        }
        adicionarSelect(dadosJSON);
    } else {
        console.log("Algum erro na requisição aconteceu...");
    }

});

function adicionarSelect(dadosJSON) {
    const selecaoClasse = document.getElementById("selecaoClasse");
    const selecaoTipo = document.getElementById("selecaoTipo");

    var repetidoClasse = [];
    var repetidoTipo = [];
    for (let j = 0; j < dadosJSON.length; j++) {
        const minhaOPClasse = document.createElement("option");
        const minhaOPTipo = document.createElement("option");
        if (!(repetidoClasse.includes(dadosJSON[j].classe))) {
            minhaOPClasse.textContent = dadosJSON[j].classe;
            repetidoClasse.push(dadosJSON[j].classe);
            selecaoClasse.appendChild(minhaOPClasse);
        }

        if (!(repetidoTipo.includes(dadosJSON[j].tipo))) {
            minhaOPTipo.textContent = dadosJSON[j].tipo;
            repetidoTipo.push(dadosJSON[j].tipo);
            selecaoTipo.appendChild(minhaOPTipo);
        }
        
    }


}

const postagens = document.getElementById("postagens");
function manipulacaoInicialJSON (dadosJSON) {
    document.getElementById("tituloObjetoPostados").textContent = "Últimos objetos Postados";
    let contador = (dadosJSON.length - 6);
    contador = (contador < 0) ? 0 : (dadosJSON.length - 6);
    for (contador; contador < dadosJSON.length; contador++) {
        if (dadosJSON[contador].ativo === "nao") continue;
        adicionarItens(contador, dadosJSON);
    }
}

function adicionarItens(id, dadosJSON) {
    const minhaDiv = document.createElement("div");
    minhaDiv.className = "painelItem";
    minhaDiv.addEventListener("click", () => {
        window.location.href = "../pages/itens.html?id=" + (id+1);
    });


    const minhah4 = document.createElement("h4");
    minhah4.style.color = "black";
    minhah4.style.textAlign = "center";
    minhah4.textContent = dadosJSON[id].titulo;

    const minhaImagem = document.createElement("img");
    minhaImagem.className = "imagensItens";
    minhaImagem.src = dadosJSON[id].imagem;

    const meuParagrafo = document.createElement("p");
    var manipularDescricao = dadosJSON[id].descricao;
    meuParagrafo.textContent = manipularDescricao.slice(0, 120) + "...";

    const divAutorEdata = document.createElement("div");
    divAutorEdata.className = "div-autor-e-data";

    const divNomeAutor = document.createElement("div");
    divNomeAutor.className = "nome-autor";
    divNomeAutor.innerHTML = `<i class="fas fa-user"></i> ${dadosJSON[id].autor || "Desconhecido"}`;


    const divData = document.createElement("div");
    divData.className = "data-item";
    divData.innerHTML = `<i class="fas fa-calendar-alt"></i> ${dadosJSON[id].data || "Desconhecida"}`;


    divAutorEdata.appendChild(divNomeAutor);
    divAutorEdata.appendChild(divData);
    minhaDiv.appendChild(minhah4);
    minhaDiv.appendChild(minhaImagem);
    minhaDiv.appendChild(meuParagrafo);
    minhaDiv.appendChild(divAutorEdata);
    postagens.appendChild(minhaDiv);
}

document.getElementById('formulario').addEventListener('submit', function () {

    const inputs = this.querySelectorAll('input[name]');

    inputs.forEach(input => {
        if (!input.value.trim()) {
        input.removeAttribute('name');
        }
    });
});

async function resultadoPesquisa (dadosJSON) {
    const parametros = new URLSearchParams(query);

    var pesquisaExata = false;
    if (!(parametros.get("tipoDePesquisa") === null)) {
        if (parametros.get("tipoDePesquisa") === "true") {
            pesquisaExata = true;
        }
    }

    var array1 = [];
    if (parametros.get("titulo") != null) {
        for (let j = 0; j < dadosJSON.length; j++) {
            if (dadosJSON[j].titulo.toLowerCase().includes(parametros.get("titulo").toLowerCase())) {
                array1.push(j);
            }
        }
    }

    var array2 = [];
    if (parametros.get("classe") != null) {
        for (let j = 0; j < dadosJSON.length; j++) {
            if (parametros.get("classe") === dadosJSON[j].classe) {
                array2.push(j);
            }
        }
    }

    var array3 = [];
    if (parametros.get("tipo") != null) {
        for (let j = 0; j < dadosJSON.length; j++) {
            if (parametros.get("tipo") === dadosJSON[j].tipo) {
                array3.push(j);
            }
        }
    }    

    var array4 = [];
    if (parametros.get("local") != null) {
        for (let j = 0; j < dadosJSON.length; j++) {
            if (dadosJSON[j].local.toLowerCase().includes(parametros.get("local").toLowerCase())) {
                array4.push(j);
            }
        }
    }    

    var array5 = [];
    if (parametros.get("data") != null) {
        var dataBruta = parametros.get("data");
        const ano = dataBruta.slice(0, 4);
        const mes = dataBruta.slice(5, 7);
        const dia = dataBruta.slice(8, 10);
        var data = dia + "/" + mes + "/" + ano;
        for (let j = 0; j < dadosJSON.length; j++) {
            if (dadosJSON[j].data && dadosJSON[j].data.toLowerCase().includes(data.toLowerCase())) {
                array5.push(j);
            }
        }
    }


    var correspondencia = [];
  
    if (pesquisaExata) {
        var todosArrays = [array1, array2, array3, array4, array5];

        // Remove arrays vazios
        todosArrays = todosArrays.filter(arr => arr.length > 0);

        // Se não houver arrays ou houver só um, não há interseção possível
        if (todosArrays.length === 0) {
            console.log("vazio");
        } else {
            // Pega a interseção de todos os arrays restantes
            var elementosComuns = todosArrays.reduce((acc, curr) => {
                return acc.filter(el => curr.includes(el));
            });

            elementosComuns.forEach(function (el) {
                correspondencia.push(el);
            });

        }

    } else {
        
        if (array1.length != 0) {
            array1.forEach(function (elemento) {
                if (!correspondencia.includes(elemento)) {
                    correspondencia.push(elemento)
                }
            });
        }

        if (array2.length != 0) {
            array2.forEach(function (elemento) {
                if (!correspondencia.includes(elemento)) {
                    correspondencia.push(elemento)
                }
            });
        }

        if (array3.length != 0) {
            array3.forEach(function (elemento) {
                if (!correspondencia.includes(elemento)) {
                    correspondencia.push(elemento)
                }
            });
        }

        if (array4.length != 0) {
            array4.forEach(function (elemento) {
                if (!correspondencia.includes(elemento)) {
                    correspondencia.push(elemento)
                }
            });
        }

        if (array5.length != 0) {
            array5.forEach(function (elemento) {
                if (!correspondencia.includes(elemento)) {
                    correspondencia.push(elemento)
                }
            });
        }

    }

    const meusDados = new ItensAPI();

    const correspondenciaFiltrada = [];

    for (const id of correspondencia) {
      const dados = await meusDados.obterDados(id);
      if (dados.ativo !== "nao") {
        correspondenciaFiltrada.push(id);
      }
    }

    correspondencia = correspondenciaFiltrada;

    if (correspondencia.length === 0) {
        document.getElementById("tituloObjetoPostados").textContent = "Não há correspondência :(";
    } else {
        document.getElementById("tituloObjetoPostados").textContent = "Achamos algo :)";
        correspondencia.forEach(function (el) {
            adicionarItens(el, dadosJSON);
        });
    }

    
}
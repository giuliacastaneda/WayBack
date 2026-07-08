// Define e aplica o tema ao carregar a página
if (!localStorage.getItem("tema")) {
    localStorage.setItem("tema", "claro");
}
const corTema = localStorage.getItem("tema");

// Cria o link do tema e adiciona ao head
const linkTema = document.createElement("link");
linkTema.setAttribute("rel", "stylesheet");
linkTema.setAttribute("id", "tema-css");
linkTema.setAttribute("href", corTema === "claro" ? "temaClaro.css" : "temaEscuro.css");
document.head.appendChild(linkTema);

// Aguarda o DOM carregar para manipular o ícone
document.addEventListener("DOMContentLoaded", () => {
    const botaoTema = document.getElementById("alternar-tema");

    // Ajusta o ícone de acordo com o tema atual
    if (corTema === "claro") {
        botaoTema.classList.remove("fa-sun");
        botaoTema.classList.add("fa-moon");
    } else {
        botaoTema.classList.remove("fa-moon");
        botaoTema.classList.add("fa-sun");
    }

    // Evento de clique para alternar tema e ícone
    botaoTema.addEventListener("click", () => {
        const temaAtual = localStorage.getItem("tema");
        const novoTema = temaAtual === "claro" ? "escuro" : "claro";
        localStorage.setItem("tema", novoTema);

        // Alterna ícones
        botaoTema.classList.toggle("fa-moon");
        botaoTema.classList.toggle("fa-sun");

        // Atualiza o CSS do tema
        const link = document.getElementById("tema-css");
        link.setAttribute("href", novoTema === "claro" ? "temaClaro.css" : "temaEscuro.css");
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const senhaInput = document.getElementById("senha");
  const confirmarInput = document.getElementById("confirmar");
  const btnCadastro = document.querySelector(".btn-cadastrar");

  // Criação visual dos requisitos
  const requisitos = document.createElement("div");
  requisitos.style.color = "white";
  requisitos.style.fontSize = "14px";
  requisitos.style.marginTop = "10px";

  requisitos.innerHTML = `
    <ul id="validadorSenha" style="list-style: none; padding-left: 0;">
      <li id="minChar">❌ Pelo menos 8 caracteres</li>
      <li id="maiuscula">❌ Pelo menos 1 letra maiúscula</li>
      <li id="minuscula">❌ Pelo menos 1 letra minúscula</li>
      <li id="numero">❌ Pelo menos 1 número</li>
      <li id="confirmarSenha">❌ As senhas coincidem</li>
    </ul>
  `;

  senhaInput.parentNode.appendChild(requisitos);

  function validarSenha(senha, confirmar) {
    const minChar = senha.length >= 8;
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);
    const confere = senha === confirmar && senha !== "";

    // Atualiza visualmente os itens
    document.getElementById("minChar").textContent = (minChar ? "✅" : "❌") + " Pelo menos 8 caracteres";
    document.getElementById("maiuscula").textContent = (maiuscula ? "✅" : "❌") + " Pelo menos 1 letra maiúscula";
    document.getElementById("minuscula").textContent = (minuscula ? "✅" : "❌") + " Pelo menos 1 letra minúscula";
    document.getElementById("numero").textContent = (numero ? "✅" : "❌") + " Pelo menos 1 número";
    document.getElementById("confirmarSenha").textContent = (confere ? "✅" : "❌") + " As senhas coincidem";

    return minChar && maiuscula && minuscula && numero && confere;
  }

  function atualizarValidador() {
    const senha = senhaInput.value;
    const confirmar = confirmarInput.value;
    const valido = validarSenha(senha, confirmar);

    btnCadastro.disabled = !valido;
    btnCadastro.style.opacity = valido ? "1" : "0.6";
    btnCadastro.style.cursor = valido ? "pointer" : "not-allowed";
  }

  senhaInput.addEventListener("input", atualizarValidador);
  confirmarInput.addEventListener("input", atualizarValidador);
});

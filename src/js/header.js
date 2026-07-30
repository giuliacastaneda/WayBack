const usuario = JSON.parse(localStorage.getItem("usuarioLogado"));



/*


if (btnLogin) {
    btnlogin.innerHTML = (usuario) ?
            "<i class='fa-solid fa-arrow-right-from-bracket'>&nbsp;&nbsp;LOGOUT</i>" 
            : "<i class='fa-solid fa-lock'>&nbsp;&nbsp;LOGIN</i>";}

            
            const btn_login = document.createElement("a");
            btn_login.id = "btn_login";
            btn_login.innerHTML = (usuario) ?
            "<i class='fa-solid fa-arrow-right-from-bracket'>&nbsp;&nbsp;LOGOUT</i>" 
            : "<i class='fa-solid fa-lock'>&nbsp;&nbsp;LOGIN</i>";
            document.querySelector(".menu").appendChild(btn_login);

    const btnLogin = document.getElementById("btn_login");
*/

fetch("../components/header.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("header-container").innerHTML = data;

    });

     
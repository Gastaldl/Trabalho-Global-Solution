function validateLogin() {
    var username = document.getElementById("nome").value;
    var password = document.getElementById("senha").value;

    if (username === "") {
        alert("Por favor, preencha o campo de usuário.");
        return false; // Impede o envio do formulário
    }

    if (username === "Admin" && password === "123456") {
        window.open("https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021", "_blank");
    } else {
        alert("Usuário ou senha inválidos. Tente novamente.");
    }

    return false; // Impede o envio do formulário
}

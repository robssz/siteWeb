const form = document.getElementById("formContato");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let servico = document.getElementById("servico").value;
    let descricao = document.getElementById("descricao").value.trim();

    let valido = true;

    // limpar mensagens
    document.querySelectorAll(".erro").forEach(e => e.textContent = "");
    document.getElementById("sucesso").textContent = "";

    if (nome === "") {
      document.getElementById("erroNome").textContent = "Informe seu nome";
      valido = false;
    }

    if (!email.indexOf("@") === -1 || email === "" ) {
      document.getElementById("erroEmail").textContent = "Email inválido";
      valido = false;
    }

    if (servico === "") {
      document.getElementById("erroServico").textContent = "Selecione um serviço";
      valido = false;
    }

    if (descricao.length < 10) {
      document.getElementById("erroDescricao").textContent = "Descreva melhor o projeto";
      valido = false;
    }

    if (valido) {
      document.getElementById("sucesso").textContent = "Formulário enviado! Entraremos em contato.";
      form.reset();
    }
  });

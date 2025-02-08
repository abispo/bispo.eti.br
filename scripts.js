document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50, // Ajusta para não cobrir o topo
          behavior: "smooth",
        });
      }
    });
  });

  const form = document.getElementById("contact-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();
    const errorMsg = document.getElementById("error-message");
    const successMsg = document.getElementById("success-message");

    // Regex para validação
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10,15}$/;

    if (!name || !email || !phone || !message) {
      errorMsg.textContent = "Todos os campos são obrigatórios.";
      return;
    }

    if (!emailRegex.test(email)) {
      errorMsg.textContent = "Por favor, insira um e-mail válido.";
      return;
    }

    if (!phoneRegex.test(phone)) {
      errorMsg.textContent =
        "O telefone deve conter entre 10 e 15 dígitos numéricos.";
      return;
    }

    errorMsg.textContent = "";

    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, message }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          successMsg.textContent = "Mensagem enviada com sucesso!";
          form.reset();
        } else {
          errorMsg.textContent = "Erro ao enviar mensagem. Tente novamente.";
        }
      })
      .catch(() => {
        errorMsg.textContent = "Erro de conexão. Verifique sua internet.";
      });
  });
});

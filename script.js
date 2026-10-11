// ===== 1. Menu do celular =====
const botaoMenu = document.querySelector(".menu-botao");
const menu = document.querySelector("#menu");

function fecharMenu() {
  menu.classList.remove("menu--aberto");
  botaoMenu.setAttribute("aria-expanded", "false");
  botaoMenu.setAttribute("aria-label", "Abrir menu");
}

botaoMenu.addEventListener("click", () => {
  const aberto = menu.classList.toggle("menu--aberto");
  botaoMenu.setAttribute("aria-expanded", String(aberto));
  botaoMenu.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
});

// Fecha o menu ao tocar em qualquer link dele
menu.querySelectorAll("a").forEach((link) => link.addEventListener("click", fecharMenu));

// Fecha o menu com a tecla Esc
document.addEventListener("keydown", (evento) => {
  if (evento.key === "Escape") fecharMenu();
});

// ===== 2. Mensagens prontas do WhatsApp =====
// O número fica só no HTML (href="https://wa.me/55...").
// A mensagem fica no atributo data-mensagem de cada botão; aqui ela vira parte do link.
document.querySelectorAll(".js-whats").forEach((link) => {
  const mensagem = link.dataset.mensagem;
  if (mensagem) {
    link.href = `${link.href.split("?")[0]}?text=${encodeURIComponent(mensagem)}`;
  }
});

// ===== 3. Ano atual no rodapé =====
document.querySelector("#ano").textContent = new Date().getFullYear();

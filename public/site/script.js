const pageName = location.pathname.replace(/\/+$/, "").split("/").pop() || "site";

const header = `
  <a class="skip-link" href="#conteudo">Pular para o conteúdo</a>
  <div class="utility-bar">
    <div class="shell utility-inner">
      <span>Central de atendimento: <strong>(11) 4002-8922</strong></span>
      <div class="access-tools" aria-label="Controles de acessibilidade">
        <span>Acessibilidade</span>
        <button type="button" data-font="decrease" aria-label="Diminuir tamanho da fonte">A−</button>
        <button type="button" data-font="increase" aria-label="Aumentar tamanho da fonte">A+</button>
      </div>
    </div>
  </div>
  
<header class="site-header">
    <div class="shell nav-wrap">
      <a href="/site/" class="logo" aria-label="Laboratório Vida, página inicial">
        <span class="logo-mark"><span></span><span></span></span>
        <span><strong>Laboratório</strong><small>VIDA</small></span>
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-label="Abrir menu">
        <span></span><span></span><span></span>
      </button>
      <nav class="main-nav" aria-label="Navegação principal">
        <a href="/site/" ${["index", "site"].includes(pageName) ? 'class="active" aria-current="page"' : ""}>Início</a>
        <a href="/site/exames" ${pageName === "exames" ? 'class="active" aria-current="page"' : ""}>Exames</a>
        <a href="/site/prevencao" ${pageName === "prevencao" ? 'class="active" aria-current="page"' : ""}>Saúde e prevenção</a>
        <a href="/site/unidades" ${pageName === "unidades" ? 'class="active" aria-current="page"' : ""}>Unidades</a>
        <a class="patient-link" href="/site/login">Área do paciente</a>
        <a class="nav-cta" href="/site/agendamento">Agendar exame</a>
      </nav>
    </div>
  </header>`;


const footer = `
  <footer class="footer">
    <div class="shell footer-grid">
      <div>
        <a href="/site/" class="logo" aria-label="Laboratório Vida">
          <span class="logo-mark"><span></span><span></span></span>
          <span><strong>Laboratório</strong><small>VIDA</small></span>
        </a>
        <p>Cuidado preciso, acolhimento humano e tecnologia a serviço da sua saúde.</p>
      </div>
      <div><strong>Laboratório</strong><a href="/site/exames">Exames</a><a href="/site/unidades">Unidades</a><a href="/site/prevencao">Saúde e prevenção</a></div>
      <div><strong>Atendimento</strong><a href="/site/agendamento">Agende seu exame</a><a href="/site/login">Resultados de exames</a><a href="/site/login">Cadastro e login</a></div>
      <div><strong>Fale com a gente</strong><span>(11) 4002-8922</span><span>atendimento@labvida.com.br</span><span>Seg. a sáb., 6h às 20h</span></div>
    </div>
    <div class="shell footer-bottom"><span>© 2025 Laboratório Vida. Todos os direitos reservados.</span><span>Política de privacidade · Acessibilidade</span></div>
  </footer>`;

const headerTarget = document.querySelector("[data-site-header]");
const footerTarget = document.querySelector("[data-site-footer]");
if (headerTarget) headerTarget.innerHTML = header;
if (footerTarget) footerTarget.innerHTML = footer;

const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector(".main-nav");
menuButton?.addEventListener("click", () => {
  const open = navigation?.classList.toggle("is-open") ?? false;
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
});

let fontScale = Number(localStorage.getItem("lab-font-scale")) || 1;
const applyFontScale = () => {
  document.documentElement.style.fontSize = `${fontScale * 100}%`;
  localStorage.setItem("lab-font-scale", String(fontScale));
};
applyFontScale();

document.querySelector("[data-font='decrease']")?.addEventListener("click", () => {
  fontScale = Math.max(0.9, fontScale - 0.1);
  applyFontScale();
});
document.querySelector("[data-font='increase']")?.addEventListener("click", () => {
  fontScale = Math.min(1.2, fontScale + 0.1);
  applyFontScale();
});

const examSearch = document.querySelector("#exam-search");
if (examSearch) {
  const examItems = [...document.querySelectorAll("[data-exam]")];
  const resultCount = document.querySelector("#result-count");
  examSearch.addEventListener("input", (event) => {
    const term = event.target.value.toLocaleLowerCase("pt-BR").trim();
    let visible = 0;
    examItems.forEach((item) => {
      const show = item.textContent.toLocaleLowerCase("pt-BR").includes(term);
      item.hidden = !show;
      if (show) visible += 1;
    });
    if (resultCount) resultCount.textContent = `${visible} exames encontrados`;
  });
}



document.querySelector("#login-form")?.addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#login-message");
  message.hidden = false;
  message.focus();
});
const parametros = new URLSearchParams(window.location.search);

if (parametros.get("sucesso") === "1") {
  document.querySelector("#schedule-content").hidden = true;
  document.querySelector("#schedule-success").hidden = false;

  window.scrollTo({ top: 0, behavior: "smooth" });
}// Para testar já que nao consigo abrir o mongo


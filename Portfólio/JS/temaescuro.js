const corpoPagina = document.querySelector("body");
const botaoTema = document.querySelector("#botao-trocatema");

const iconeSol = document.querySelector("#icone-sol");
const iconeLua = document.querySelector("#icone-lua");

const textoTema = document.querySelector("#texto-tema");

function ativaTemaEscuro() {
  corpoPagina.classList.add("tema-escuro");
  corpoPagina.classList.remove("temaclaro");
  document.querySelector("h1").classList.add("temaescuro-font");
  document.querySelector("p").classList.add("temaescuro-font");
}

function ativaTemaClaro() {
  corpoPagina.classList.remove("tema-escuro");
  corpoPagina.classList.add("temaclaro");
  document.querySelector("h1").classList.remove("temaescuro-font");
  document.querySelector("p").classList.remove("temaescuro-font");
}

function TrocaIcone() {
  if (iconeSol.classList.contains("display-none")) {
    iconeSol.classList.remove("display-none");
    iconeLua.classList.add("display-none");
  } else {
    iconeLua.classList.remove("display-none");
    iconeSol.classList.add("display-none");
  }
}

function trocaTexto() {
  if (textoTema.textContent === "Tema Escuro") {
    textoTema.textContent = "Tema Claro";
  } else {
    textoTema.textContent = "Tema Escuro";
  }
}

function trocaTema() {
  if (corpoPagina.classList.contains("temaclaro")) {
    ativaTemaEscuro();
  } else {
    ativaTemaClaro();
  }
  trocaTexto();
  TrocaIcone();
}

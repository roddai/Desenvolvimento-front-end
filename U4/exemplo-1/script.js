// Acessando elementos por ID
const section = document.getElementById('sec-geral');
section.style.backgroundColor = "rgb(236, 242, 231)";

// Acessando elementos por Class
const paragrafos = document.getElementsByClassName('text');

for (let paragrafo of paragrafos) {
  paragrafo.style.color = "gray";
  paragrafo.style.fontSize = "20px";
}

// Acessando elementos pela Tag
const span = document.getElementsByTagName('span');
span[0].style.color = "orange";
span[0].style.backgroundColor = "black";
span[0].style.border = "2px solid orange";
span[0].style.borderRadius = "10px";
span[0].style.padding = "5px";

// Acessando elementos por meio de seletor avançado
const titulo = document.querySelector('h1');
// titulo.style.fontSize = "35px";
titulo.innerText = "REFLEXÃO DO DIA";
titulo.id = "titulo-h1";

const prgf = document.querySelector('.text');
prgf.style.fontFamily = "sans-serif"

// Acessando elementos por meio de seleção múltipla
const todosParagrafos = document.querySelectorAll('.text');
todosParagrafos[1].style.textDecoration = "underline black";

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


// Criação de elementos
// a. cria o elemento
const div = document.createElement('div');

// b. adiciona propriedades e/ou ID/classe
div.id = "div-id";
div.className = "div-class";

// c. Adição do elemento criado na página
section.appendChild(div);

// console.log(div);

// Cria e adiciona imagem na div criada

const imagem = document.createElement('img'); // a
imagem.id = "img"; // b
imagem.src = "./albertEinstein.jpg"; // b
div.appendChild(imagem); // c


// Eventos
// Adicionar um evento de clique ao parágrafo
paragrafos[1].addEventListener('click', function () {
  console.log('Parágrafo clicado!');
});

// Adicionar um evento de mouseover ao título
titulo.addEventListener('mouseover', function () {
  this.style.color = 'blue'; // Alterar a cor do texto para azul
});

// Adicionar um evento de mouseout para restaurar a cor original
titulo.addEventListener('mouseout', function () {
  this.style.color = ''; // Restaurar a cor original do texto
});

// Adiciona botão que muda a cor de fundo da section
const botao = document.createElement('button');
botao.id = "id-botao";
botao.className = "class-botao";
botao.innerText = "Mudar cor de fundo"
section.appendChild(botao);

botao.addEventListener('click', function () {
  const rgb = [];

  for (let index = 0; index < 3; index += 1) {
    const aleatorio = Math.floor(Math.random() * 256);
    rgb.push(aleatorio);
  }

  section.style.backgroundColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
});
// Array
const arrayLinksNavegacao = ['Home', 'Sobre', 'Contato'];

// Base de Dados
const dadosDosProdutos = {
  produto: [
    {
      codigo: 1,
      nome: "Hd Externo Seagate Expansion 4TB",
      imagem: "./images/hdExterno.jpg",
      preco: 138.20,
      descricao: "O Disco Rígido Externo Seagate Expansion de 4TB oferece uma solução confiável e espaçosa para armazenamento de dados. Com design compacto e portátil, é ideal para quem precisa de capacidade extra para documentos, fotos, vídeos e outros arquivos importantes. Conecta-se facilmente via USB 3.0 para transferências rápidas de dados e não requer fonte de alimentação externa, simplificando sua utilização em qualquer lugar. ",
      fabricante: "Seagate Expansion",
      cor: "Preta"
    },
    {
      codigo: 2,
      nome: "HP LaserJet Professional P1102",
      imagem: "./images/impressoraLaserHP.jpg",
      preco: 1099.00,
      descricao: "A HP LaserJet Professional P1102 é uma impressora laser compacta projetada para uso doméstico e pequenos escritórios. Oferece impressão rápida e de alta qualidade em preto e branco, com uma bandeja de papel de capacidade padrão e conexão USB para facilitar a instalação e o uso.",
      fabricante: "HP",
      cor: "Branca"
    },
    {
      codigo: 3,
      nome: "iPad Pro 11",
      imagem: "./images/ipad.jpg",
      preco: 9359.10,
      descricao: "O iPad Pro 11 é um tablet premium da Apple, conhecido por seu design elegante e desempenho poderoso. Com uma tela Liquid Retina de 11 polegadas, oferece cores vibrantes e detalhes nítidos. Equipado com o chip A12Z Bionic, é capaz de lidar com tarefas exigentes como edição de fotos e vídeos, além de suportar o uso de Apple Pencil e teclado Smart Keyboard (vendidos separadamente). É ideal para profissionais criativos e usuários que buscam um dispositivo versátil para produtividade e entretenimento.",
      fabricante: "Apple",
      cor: "Prateado"
    },
    // {
    //   codigo: 4,
    //   nome: "Mouse Gamer Sem Fio Logitech G305 LIGHTSPEED",
    //   imagem: "./images/mouseSemFio.jpg",
    //   preco: 277.90,
    //   descricao: "O Mouse Gamer Sem Fio Logitech G305 é uma opção prática e acessível para quem busca simplicidade e conveniência. Com conexão sem fio confiável de 2.4 GHz, oferece liberdade de movimento sem comprometer a estabilidade da conexão. Seu design compacto e ambidestro o torna confortável para uso tanto por destros quanto por canhotos. Possui um sensor óptico que proporciona precisão em diversos tipos de superfícies. Alimentado por uma única pilha AA, o M170 oferece uma longa vida útil da bateria, sendo ideal para uso diário em computadores desktop e notebooks.",
    //   fabricante: "Logitech",
    //   cor: "Preta"
    // },
    {
      codigo: 5,
      nome: "Notebook Dell Core I5",
      imagem: "./images/notebookDell.jpg",
      preco: 2499.00,
      descricao: "O Notebook Dell Core i5 é uma poderosa máquina projetada para oferecer desempenho e versatilidade em um formato portátil. Equipado com um processador Intel Core i5 de última geração, proporciona velocidade e eficiência para multitarefas, desde navegação na web até edição de documentos e vídeos. Com uma tela de alta resolução e cores vibrantes, proporciona uma excelente experiência visual para trabalho e entretenimento.",
      fabricante: "Dell Inc.",
      cor: "Preta"
    },
    {
      codigo: 6,
      nome: "Echo Show 10: Smart Display HD",
      imagem: "./images/echoShow10.jpg",
      preco: 2099.39,
      descricao: "O Echo Show 10 é um smart display HD de 10,1 polegadas que integra movimento dinâmico com a Alexa. Sua tela nítida oferece excelente qualidade visual para vídeos e chamadas de vídeo, ajustando-se automaticamente para manter você no centro da cena. Com comandos de voz, a Alexa controla dispositivos domésticos inteligentes, reproduz música e muito mais. Equipado com uma câmera de 13 MP, o Echo Show 10 garante chamadas claras e seguras, com controles de privacidade como cobertura física da câmera e desligamento de microfones.",
      fabricante: "Amazon",
      cor: "Preta"
    },
    {
      codigo: 7,
      nome: "Projetor Smart Screen Linux",
      imagem: "./images/projetor.jpg",
      preco: 1058.42,
      descricao: "O Smart Screen Linux com função de projetor da Multilaser é um dispositivo versátil que combina as funcionalidades de uma tela inteligente com as capacidades de projeção de um projetor de 4500 lumens. Com uma luminosidade de 4500 lumens, é capaz de projetar imagens claras e nítidas em diferentes ambientes, garantindo uma boa visibilidade mesmo em condições de iluminação variadas. Este produto da Multilaser é ideal para apresentações profissionais, uso educacional e entretenimento em casa, proporcionando uma experiência multimídia completa.",
      fabricante: "Multilaser",
      cor: "Cinza"
    }
  ]
};

// Captura os elementos da estrutura HTML
const elementoHeader = document.querySelector('header');
const elementoNav = document.querySelector('#nav-section');
const elementoMain = document.querySelector('main');
const elementoFooter = document.querySelector('footer');
const elementoAside = document.querySelector('aside');

// Função geral para criação de um elemento
const criaElemento = (qual, texto, id, classe, onde, caminhoImagem) => {
  const elemento = document.createElement(qual);
  elemento.innerText = texto;
  elemento.id = id;
  elemento.className = classe;

  if (qual === 'a') {
    elemento.href = '';
  }

  if (qual === 'img') {
    elemento.src = caminhoImagem;
  }

  onde.appendChild(elemento);

  return elemento;
};

//Função que adiciona os elementos do Header
const adicionaElementosHeader = () => criaElemento('h1', 'Innovate Tech Store', '', 'title', elementoHeader);

//Função que adiciona os elementos da barra de navegação
const adicionaElementosNav = () => {
  for (let index = 0; index < arrayLinksNavegacao.length; index += 1) {
    const elementoDiv = criaElemento('div', '', '', 'navElement', elementoNav);
    criaElemento('a', arrayLinksNavegacao[index], '', 'navLink', elementoDiv);
  }
}

//Função que adiciona os elementos de imagem em Main
const adicionaImagensMain = () => {
  const sectionPrincipal = criaElemento('section', '', '', 'section-main', elementoMain);

  for (let index = 0; index < dadosDosProdutos.produto.length; index += 1) {
    const elementoDiv = criaElemento('div', '', '', 'sectionElement', sectionPrincipal);
    criaElemento('img', '', '', 'imagemProduto', elementoDiv, dadosDosProdutos.produto[index].imagem);
    criaElemento('p', dadosDosProdutos.produto[index].nome, '', 'imagemProduto', elementoDiv);
    criaElemento('button', 'Mais info', dadosDosProdutos.produto[index].codigo, 'botao', elementoDiv);
  }
}

//Função que adiciona os elementos do Aside
const adicionaElementosIniciaisAside = () => {
  let tamanhoDoArray = dadosDosProdutos.produto.length;

  criaElemento('p', 'Produto em destaque', '', 'aside-inicial', elementoAside);
  criaElemento('img', '', '', "imagem-produto", elementoAside, dadosDosProdutos.produto[tamanhoDoArray - 1].imagem);
  criaElemento('p', dadosDosProdutos.produto[tamanhoDoArray - 1].nome, 'prod-destaque', 'imagemProduto', elementoAside);
  criaElemento('button', 'Mais info', dadosDosProdutos.produto[tamanhoDoArray - 1].codigo, 'botao', elementoAside);
}

// Função que adiciona o texto do Footer
const adicionaRodape = () => criaElemento('p', "2024 Innovate Tech Store. Todos os direitos reservados.", '', "", elementoFooter);

// Função que adiciona evento de clique nos botões
const eventoNosBotoes = () => {
  const buttons = document.querySelectorAll('button');

  for (let index = 0; index < buttons.length; index += 1) {
    buttons[index].addEventListener('click', adicionaDetalhesAside);
  }
}

//Função que adiciona os elementos do Aside
const adicionaDetalhesAside = (event) => {
  elementoAside.innerText = "";

  const codigo = event.target.id;

  const chavesDeProdutos = Object.keys(dadosDosProdutos.produto[0]);

  for (let index = 0; index < dadosDosProdutos.produto.length; index += 1) {
    if (parseInt(codigo) === dadosDosProdutos.produto[index].codigo) {
      const produtoSelecionado = dadosDosProdutos.produto[index];
      console.log(produtoSelecionado);

      for (let index = 0; index < chavesDeProdutos.length; index += 1) {
        let texto = chavesDeProdutos[index];

        if (texto === "imagem") {
          criaElemento('img', '', '', "imagem-produto", elementoAside, produtoSelecionado.imagem);
        } else {
          criaElemento('p', `${texto.charAt(0).toUpperCase() + texto.substring(1)}: ${produtoSelecionado[texto]}`, '', `prod-${texto}`, elementoAside);
        }
      }
    }
  }
}

// window.onload
window.onload = () => {
  adicionaElementosHeader();
  adicionaElementosNav();
  adicionaImagensMain();
  adicionaElementosIniciaisAside();
  adicionaRodape();
  eventoNosBotoes();
}
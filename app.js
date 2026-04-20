let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumAleatorio();
let tentativas = 1;

// let titulo = document.querySelector('h1'); //função é um trecho de codigo que é responsavel por uma função especifica, funcionalidade ou ação 
// titulo.innerHTML = 'Bem vindo ao jogo do número secreto!';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um numero de 1 a 100: ';

function exibirTextoNaTela (tag, texto){ // função com parametro
    let campo = document.querySelector(tag);
    campo.innerHTML = (texto);  
    function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
}

    function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Bem vindo ao jogo do número secreto!')
    exibirTextoNaTela ('p', 'Escolha um número de 1 a 10: ');
}
exibirMensagemInicial();
console.log(`${numeroSecreto}`);

function verificarChute() { // função booleana 
   
    let chute = document.querySelector('input').value; //.value é para comparar apenas o valor do parametro 
    let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa';      
    let mensagemTentativa = `Parabéns, você acertou o numero secreto com ${tentativas} ${palavraTentativa}`;
        
    if (chute == numeroSecreto) {
        exibirTextoNaTela ('h1' , 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled'); // pega o elemento do HTML pelo id e remove atraves do 'removeAttribute'

        } else {
          if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', 'O numero secreto é menor');
        }
         else {
            exibirTextoNaTela('p', 'O numero secreto é maior');
        }
    }   
        tentativas++
        limparChute()
}
function gerarNumAleatorio() { //função sem parametro e com geração de numero aleatório
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length;

   if (quantidadeDeNumerosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
   }
   if (listaDeNumerosSorteados.includes(numeroEscolhido)) {// includes confere se a variavel ja esta inclusa na lista
        return gerarNumAleatorio();
   } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //push adiciona elementos no final da fila
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;

   }
}
function limparChute() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumAleatorio();
    limparChute()
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAtributte('disabled', true);
}













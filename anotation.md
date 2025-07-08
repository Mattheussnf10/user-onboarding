// sintaxe = sin (mesmo) + taxon (classifição) | sintasse ch, ks, ss

// var = variavel
var nome = "Matheus"; 		// tipo string - variavel de escopo global
var sobrenome = 'Soares'; // tipo string
var mae = `Susi`; 				// tipo string (literals => template)

var primeira_letra = nome.charAt(0);

var parcela_1 = 1; // number
var parcela_2 = 1;
var soma = parcela_1 + parcela_2;

let pet = "lupi";
var tempo_de_vida = 7;
tempo_de_vida = 8;

const preco_do_ingresso = 20.50;

// escopo de variáveis
if(tempo_de_vida >= 8) {
	let offset = -1; // let é uma variável local
	tempo_de_vida = offset + tempo_de_vida; 
	mae = "Susi Soares";
}

let id = 1 + offset;

// criação de função e escopo de função
function calcularIdade(ano_nascimento, ano_atual) {
	return anoatual - nascimento;
}

// anatomia de uma função 
// function = palavra reservda pede a linguagem que declaremos uma função
// calcularIdade = nome da função: pode ser qualquer nome
// (xxx) = o parenteses é o invoke da função. invoke é o mecanismo de execução para o escopo da função
// ano_nascimento, ano_atual = parametros da função ou aguimentos de entrada e deve ser separados por virgula
// { } = corpo da função. é escopo de trabalho. 
// usa-se de funções para executar trechos de código que podem ser reutilizados em diferentes lugas do software

// invocação da função
let idade_atual = calcularIdade(1990, 2023);

const pai = "pedro";
var idade_pai = 0;
if(pai == "pedro") {
	idade_pai = calcularIdade(1990, 2025);
}

// anatomia de uma classe
// class = palavra reservada que pede a linguagem para declarar uma classe
// as chaves determinam o corpo da classe (ou escopo de trabalho)
// variveis dentro de uma classe são chamadas de pro´riedade da classe
// funções dentro de classe sõa chamados de métodos

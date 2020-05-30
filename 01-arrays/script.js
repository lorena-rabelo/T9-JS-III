// map(): faz uma iteração com todos os elementos da lista e retorna outra
// 1) Adicionar "a" no final das palavras
const profissionais = ["desenvolvedor", "programador", "autor", "vereador", "professor"];

const profissionaisMulheres = profissionais.map ((item) => {
  return item + "a";
})

console.log(profissionaisMulheres);

// 2) Retornar frutas com somente a primeira letra maiúscula
// const frutas = ["maçã", "banana", "Pera", "Melancia", "pêsSSEgO", "jAcA"];

// const frutasOk = frutas.map(
//   (item) => {
//     return item.toLowerCase();
    
//   }
//   )
//   console.log(frutasOk);
  // return item.capitalize();

  // const frutasK = frutas.map(
  //   (item) => {
  //     return this.charAt(0).toUpperCase() + this.slice(1);
  //   }
  //   )
  //   console.log(frutasK);



// filter(): retorna uma nova array com apenas com elementos que atendem à condição
// 1) Criar nova array somente com números pares
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numPares = [];
numPares = num.filter((item) => {
  if (item % 2 === 0){
    return numPares;
  }
})
console.log(numPares);


// 2) Criar nova array somente com profissionais da área de TI
const pessoas = [
  { nome: "Mell", area: "TI", profissao: "dev" },
  { nome: "Munique", area: "ciência", profissao: "pesquisadora"},
  { nome: "Melissa", area: "construção", profissao: "engenheira"},
  { nome: "Madalena", area: "TI", profissao: "infra" },
  { nome: "Monica", area: "medicina", profissao: "cardiologista"},
];

let pessoasTI = [];
pessoasTI = pessoas.filter((item) => {  
    return item.area === "TI";  
})
console.log(pessoasTI);

// reduce(): recebe uma array e retorna um valor só. Redutor.
// 1) Dado uma array de números, retornar a soma de todos eles
const nums = [5, 10, 15, 20];
let numSoma = -Infinity;
numSoma = nums.reduce(function(acumulado, corrente){
  return acumulado + corrente;
}, 0);

console.log(numSoma);


// 2) Retornar o lucro de uma empresa
const transacoes = [
  { descricao: "carro", valor: 32000, tipo: "saída" },
  { descricao: "cliente 1", valor: 10000, tipo: "entrada" },
  { descricao: "proventos", valor: 23000, tipo: "entrada" },
  { descricao: "salario 1", valor: 8500, tipo: "saída" }
];



const lucro = transacoes.reduce((acumulado,item) => {
  console.log(item.tipo === "entrada");
}


// const lucro = transacoes.reduce(
//   (acumulado, item) => {    
//     console.log(item.tipo === "entrada");
//     if(item.tipo === "entrada") {
//       return acumulado + item.valor;
//     } else {
//       return acumulado - item.valor;
//     }
//   }, 0
// );

// sort(): organiza itens da array de acordo com uma verificação
// 1) Organizar números de forma decrescente

// 2) Organizar pessoas por ordem alfabética

let myFirstVar= "Olá Mundo!";
console.log(myFirstVar);

//sintaxe tradicional
console.log("o meu nome é " +myName + " e o meu número preferido é " +myLuckyNumber);

//sintaxe simplificada
console.log(`o meu nome é ${myName} e o meu número preferido é ${myLuckyNumber}`);

let millionDollarQuestion = prompt('que tal a semana com feriado e apagão?'); //basicamente defino o prompt e guardo a resposta do user dentro da variável e os dados recebidos são strings

//para que servem os arrays para nao termos de declarar variáveis de forma repetida tipo dias de semana, e outros grupos
let day1 = "segunda";
let day2= "terça";
let day3 = "quarta" //and so one; mas isto não é viável então usamos um array


//arrays

let weekDays = ["segunda", "terça", "quarta"];
let studentNotes = [ 18, 19, 20, 17];
let ourSuperArr = ["segunda", true, "Joana", 17];

console.log("o array na posição 1 tem" + weekDays[1].toUpperCase);

//modificar arrays- pensar numa lista de compras . usamos metodos para colocar coisas em determinada posição
//Push: adiciona ao fim
//Pop: remove do fim;
//Shift: remove do ínicio;
//Unshift: adiciona ao inicio;

//métodos de arrays

let shoppingList = ["batatas", "feijão"];

// let item = prompt("Qual é o item a adicionar");
// shoppingList.push(item)
// console.log(shoppingList)

// for(let i=0; i>shoppingList.length; i++){
//     console.log("compra" + shoppingList[i]);
// }
//podemos usar o método acima similar a java mas devemos simplificar e em javascript usar a variável declarada( aqui item). Para cada elemtno do array imprime elemento.
for (let item of shoppingList){
    console.log(item)
}
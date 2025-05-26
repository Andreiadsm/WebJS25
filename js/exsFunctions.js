// function printHeart() {
//   alert("<3");
// }

//pp 69
//posso colocar na mensagem alguma coisa por defeito e daí estar message ="css")
// function rant(message = "css"){
// for(let i=0; i<3; i++){
//     console.log(i +message.toUpperCase());
//     }
//     return "ok"
// }

//pp 72
// function isSnakeEyes(num1, num2) {
//     if (num1 === 1 && num2 === 1) {
//         console.log("Não são olhos de cobra");
//     } else {
//         console.log("Yay são olhos de cobra.");
//     }
// }

//Fichaprática01 funções, ex01

// function multiply(num1, num2){
//     console.log(num1*num2)
// }

//Fichaprática01 funções, ex02

// function  isShortsWeather (temperature){
//     if (temperature > 25) {
//         return true;
//     } else {
//         return false;
//     }
// }

//ficha pratica ex03

// function myShoppingList() {
//     let shoppingList = [];
//     let item = prompt("Adicione um item à sua lista (escreva 'fim' para terminar):");

//     while (item.toLowerCase().trim() !== "fim") {
//         shoppingList.push(item);
//         item = prompt("Adicione outro item à sua lista (ou 'fim' para terminar):");
//     }

//     for (let item of shoppingList) {
//         console.log("comprar " + item);
//     }
// }
//para chamar a função a seguir
// myshoppingList();

//pp86
function firstNames() {
    const fullNames = [
        { first: 'Albus', last: 'Dumbledore' },
        { first: 'Harry', last: 'Potter' },
        { first: 'Hermione', last: 'Granger' },
        { first: 'Ron', last: 'Weasley' },
        { first: 'Rubeus', last: 'Hagrid' },
        { first: 'Minerva', last: 'McGonagall' },
        { first: 'Severus', last: 'Snape' }
    ];

const firstNames = fullNames.map(function(name){
    return name.first;
}
)
}

firstNames()

function lastNames() {
    const fullNames= [
        { first: 'Albus', last: 'Dumbledore' },
        { first: 'Harry', last: 'Potter' },
        { first: 'Hermione', last: 'Granger' },
        { first: 'Ron', last: 'Weasley' },
        { first: 'Rubeus', last: 'Hagrid' },
        { first: 'Minerva', last: 'McGonagall' },
        { first: 'Severus', last: 'Snape' }
    ];

const lastNames = fullNames.map(function(name){
    return name.last;
})


fullNames.forEach(function(item){
    console.log(item.first + ' ' + item.last)
}
)
}

lastNames()


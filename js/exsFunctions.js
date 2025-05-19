function printHeart() {
  alert("<3");
}

//pp 69
//posso colocar na mensagem alguma coisa por defeito e daí estar message ="css")
function rant(message = "css"){
for(let i=0; i<3; i++){
    console.log(i +message.toUpperCase());
    }
    return "ok"
}

//pp 72
function isSnakeEyes(num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log("Não são olhos de cobra");
    } else {
        console.log("Yay são olhos de cobra.");
    }
}

//Fichaprática01 funções, ex01

function multiply(num1, num2){
    console.log(num1*num2)
}

//Fichaprática01 funções, ex02

function  isShortsWeather (temperature){
    if (temperature > 25) {
        return true;
    } else {
        return false;
    }
}

//FichaPrática1 ex03
Function lastElement(){

let lastElement = []; // array
let lastElement = []; 
while (item.toLowerCase().trim() !== "fim") {
    shoppingList.push(item);
    item = prompt("Adicione outro item à sua lista:");
}
for (let item of shoppingList){
    console.log("comprar " item)
}
}

//para chamar a função a seguir
myshoppingList()

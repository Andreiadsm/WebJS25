// let myFirstVar= "Olá Mundo!";
// console.log(myFirstVar);

// //sintaxe tradicional
// console.log("o meu nome é " +myName + " e o meu número preferido é " +myLuckyNumber);

//sintaxe simplificada
// console.log(`o meu nome é ${myName} e o meu número preferido é ${myLuckyNumber}`);

// let millionDollarQuestion = prompt('que tal a semana com feriado e apagão?'); //basicamente defino o prompt e guardo a resposta do user dentro da variável e os dados recebidos são strings

//para que servem os arrays para nao termos de declarar variáveis de forma repetida tipo dias de semana, e outros grupos
// let day1 = "segunda";
// let day2= "terça";
// let day3 = "quarta" //and so one; mas isto não é viável então usamos um array


//arrays

// let weekDays = ["segunda", "terça", "quarta"];
// let studentNotes = [ 18, 19, 20, 17];
// let ourSuperArr = ["segunda", true, "Joana", 17];

// console.log("o array na posição 1 tem" + weekDays[1].toUpperCase);

//modificar arrays- pensar numa lista de compras . usamos metodos para colocar coisas em determinada posição
//Push: adiciona ao fim
//Pop: remove do fim;
//Shift: remove do ínicio;
//Unshift: adiciona ao inicio;

//métodos de arrays

// let shoppingList = ["batatas", "feijão"];

// let item = prompt("Qual é o item a adicionar");
// shoppingList.push(item)
// console.log(shoppingList)

// for(let i=0; i>shoppingList.length; i++){
//     console.log("compra" + shoppingList[i]);
// }
//podemos usar o método acima similar a java mas devemos simplificar e em javascript usar a variável declarada( aqui item). Para cada elemtno do array imprime elemento.
// for (let item of shoppingList){
//     console.log(item)
// }

//Nested Arrays ou arrays tridimensionais

// function modelObj(){
// let modules = [
//     ["arrays", "funções",];
//          "js",
//          "programacao de servidor";]
// console.log(modules[0][1][2][1])

// let courseStructure ={
//     courseName : "Software Developer",
//     hours: 1000,
//     modules: ["js", "algoritmia", "mysql"]
// }
// }

// function modelObj()

// console.log(courseStructure.courseName) ou se quiser aceder a modules coloco:
// console.log(courseStructure.modules[1])
//primeira maneira de organizar dados: variáveis, depois arrays e ainda objetos.
// para reassignar um valor:
// courseStructure.courseName = "AWS";

//funções

// function myshoppingList(){

// let shoppingList = []; // Lista de compras
// let item = prompt("adicione o item"); 
// while (item.toLowerCase().trim() !== "fim") {
//     shoppingList.push(item);
//     item = prompt("Adicione outro item à sua lista:");
// }
// for (let item of shoppingList){
//     console.log("comprar " item)
// }
// }

// //para chamar a função a seguir
// myshoppingList()


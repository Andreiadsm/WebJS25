// let myLuckyNumber = 7;
// let myName = "Andreia";
// console.log("O meu nome é "+ myName +" o meu número preferido é "+ myLuckyNumber);

// //ex pp28
// const MESSAGE = " TASTE THE RAINBOW! "
// console.log(MESSAGE)
// let whisper = MESSAGE.toLowerCase().trim();
// console.log(whisper)

// //ex pp30
// const WORD = "skateboard";
// let facialHair = WORD.slice(5).replace("o", "e")
// console.log(facialHair)

// //ex pp 35
// let firstName = prompt("qual o seu primeiro nome?") 
// let lastName = prompt ("qual o seu apelido?")
// alert ("Olá" +" "+firstName +" " +lastName) // ou sintaxe simplificada (`Olá ${firstName}${lastName})

//ex pp 38
// let weekDay = promp("Hoje que dia da semana é?")
// if (weekday.toLowerCase = "Sexta") {
//     alert("yay,sobrevivemos a mais uma semana")
// } else {"keep going, já faltou mais para o fim de semana"};

//ex2 pp38

// let password = prompt("Indique a sua password") 

// if (password.length < 6){
//     console.log ("insira 6 caracteres");
// } else{
//     console.log ("pass ok");
// }

// //ex3 pp 38 - toLowerCase e trim tb funciona no prompt
// let weekDay = prompt ("que dia da semana é");

// if (weekDay.toLowerCase().trim() == "Sexta"){
//     console.log("yay sobrevivemos a mais uma semana");
// }else{
//     console.log("força nisso");
// }


// //ex3 pp 38
// let weekDay = prompt("Hoje que dia da semana é?")
// switch (weekDay) {
//     case "Segunda":
//         alert ("Segunda");
//         break;
//     case "Terça":
//         alert("Terça");
//         break;
//     case "Quarta":
//         alert("Quarta");
//         break;
//     case "Quinta":
//         alert ("Quinta");
//         break;
//     case "Sexta":
//         alert ("Yay sobrevivemos a mais uma semana");
//         break;
//     default:
//         alert("ups, não temos essa opção")
// }

//ex58 pag 43 arrays

// let planets = ["Mercúrio", "Vénus", "Terra", "Mart", "Jupiter", "Saturno", "Urano", "Neptuno", "Plutão"]
// planets[3] = "Marte";
// planets.pop();
// planets.unshift("khay");
// console.log(planets);

//ex page 55

// for (let i=0; i<6; i++) {
//     console.log (i+"Da ba dee da ba daa");
// }

// let numeros = [25, 20, 15, 10, 5]
// for (let i=0; i<1; i++) {
//     console.log (numeros)
// }

// for(let i=25; i>=5; i-=5){
//     console.log(i);
// }

//ex pag 58
// const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
// for (let i=0; i < people.length; i++){
//     console.log(people[i].toUpperCase());
// }

//ex pag 62

// let shoppingList = []; // Lista de compras
// let item; // Variável para armazenar o item digitado

// while (true) {
//     item = prompt("Adicione um item à lista (ou digite 'código' para finalizar):");

//     // Verifica se o usuário digitou 'código' para sair
//     if (item.toLowerCase() === "código") {
//         break; // Sai do loop
//     }

//     // Adiciona o item à lista
//     shoppingList.push(item);
// }

// // Mostra a lista final
// console.log("A sua lista de compras:");
// for (let produto of shoppingList) {
//     console.log("- " + produto);
// }

//Correção Sara

// let shoppingList = []; // Lista de compras
// let item = pronto("adicione o item"); 
// while (item.toLowerCase().trim() !== "fim") {
    // shoppingList.push(item);
    // item = prompt("Adicione outro item à sua lista:");
// }
// for (let item of shoppingList){
//     console.log("comprar " item)
// }


// let shoppingList = [];
// let item="";

// while (item !== "código") {
//     item = prompt("Adicione um item à sua lista (ou digite 'código' para finalizar):");

//     if (item !== "código") {
//         shoppingList.push(item);
//     } else{console.log("A sua lista de compras:");
//     }
// }

// for (let item of shoppingList){
//     console.log("comprar " item)
// }

// if (item !== "fim") {
//     item= prompt("Digite 'fim' para terminar):");
// }
// else (item === "fim") {
//     console.log(shoppingList.trim)};

// const airplaneSeats = [
// ['Ruth', 'Anthony', 'Stevie'],
// ['Amelia', 'Pedro', 'Maya'],
// ['Xavier', 'Ananya', 'Luis'],
// ['Luke', null, 'Deniz'],
// ['Rin', 'Sakura', 'Francisco']
// ];

// airplaneSeats[3][1] = "Andreia"
// console.log(airplaneSeats)

//pp 50

// let product ={
//     name: "Meias",
//     inStock: true,
//     Price: 1.99,
//     Moeda: "€",
//     Colours: ["Red", "Blue", "Green"]
// }
// console.log(product.Price)
// console.log(product.Colours[2])

// product.Price = "2.55" //chamamos o nome do objecto.key (neste caso product.Price)
// console.log("o produto custa" +product.price + product.moeda +" e a cor é" + product.colours[2])
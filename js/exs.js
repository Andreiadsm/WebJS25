let myLuckyNumber = 7;
let myName = "Andreia";
console.log("O meu nome é "+ myName +" o meu número preferido é "+ myLuckyNumber);

//ex pp28
const MESSAGE = " TASTE THE RAINBOW! "
console.log(MESSAGE)
let whisper = MESSAGE.toLowerCase().trim();
console.log(whisper)

//ex pp30
const WORD = "skateboard";
let facialHair = WORD.slice(5).replace("o", "e")
console.log(facialHair)

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

let password = prompt("Indique a sua password") 
console.log(password)
if (password.length > 5){
    alert ("acesso permitido");
} else {"Insira 6 caracteres"};


//ex3 pp 38
let weekDay = prompt("Hoje que dia da semana é?")
switch (weekDay) {
    case "Segunda":
        alert ("Segunda");
        break;
    case "Terça":
        alert("Terça");
        break;
    case "Quarta":
        alert("Quarta");
        break;
    case "Quinta":
        alert ("Quinta");
        break;
    case "Sexta":
        alert ("Yay sobrevivemos a mais uma semana");
        break;
    default:
        alert("ups, não temos essa opção")
}
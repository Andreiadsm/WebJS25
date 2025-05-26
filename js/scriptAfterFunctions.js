// Variável global deve ser declarada antes de qualquer função
let globalVar = "qq coisa";

// Função simples sem argumentos
function helloClass() {
    let localVar = "sou uma variável local";
    alert("olá turma de SoftDev");
}

// Função simples com mensagem personalizada
function helloPerson() {
    alert("Olá António");
}

// Função com argumento - torna o código mais reutilizável
function hello(greetScope) {
    alert("olá " + greetScope);
}

// Função que chama outra função com input do utilizador
function tellMeWhatYouHate() {
    let hate = prompt("Diz-me o que odeias");
    rant(hate);
}

// Suponho que a função 'rant' era para ser criada — adicionando-a:
function rant(thing) {
    alert("Eu odeio " + thing.toUpperCase() + "!!!");
}

// Função que soma dois números e retorna o resultado
function sum(x, y) {
    let total = x + y;
    return total;
}

// Alternativa com função anónima atribuída a uma constante
const sum = function(x, y) {
    let total = x + y;
    return total;
}

// Exemplo de uso da função 'sum'
let total2 = sum(4, 6);
console.log(total2);

// Alternativa com arrow function
const sum = (x, y) =>{
    let total = x + y;
    return total;
}


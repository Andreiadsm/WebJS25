// Ficha PRÁTICA 01

// Ex01
// Função multiply que recebe dois valores e dá o resultado da multiplicação dos mesmos
function multiply(num1, num2){
    return num1 * num2;
}

let a = 2;
let b = 3;
let res = multiply(a, b);
console.log("Multiplicação de " + a + " por " + b + ": " + res);

let n1 = 9;
let n2 = 9;
console.log("Multiplicação de " + n1 + " por " + n2 + ": " + multiply(n1, n2));


// Ex02
// Função isShortsWeather que aceite um argumento temperatura
// Se a temperatura for maior que 25, retorna verdadeiro. Se não, retorna falso.
function isShortsWeather (temp){
    if (temp > 25) {
        return true;
    } else {
        return false;
    }
}

let tempAlta = 30;
let daParaCalcoes = isShortsWeather(tempAlta);
console.log("Com " + tempAlta + " graus, dá para usar calções? " + daParaCalcoes);

let tempBaixa = 20;
console.log("Com " + tempBaixa + " graus, dá para usar calções? " + isShortsWeather(tempBaixa));

// Ex03
// Função chamada lastElement que aceita um array e retorna o último elemento do array (sem o remover).
// Se o array for vazio, deve retornar null.
function lastElement(array){
    if (array.length === 0) {
        return null;
    } else {
        let ultimo = array[array.length - 1];
        return ultimo;
    }
}

// Testes Ex03
let myArray = [3, 5, 7];
myArray.pop(); // Remove o ultimo elemento
myArray.unshift(1); // Adiciona 1 no início


let elementoFinal = lastElement(myArray);
console.log("O último elemento do array (após manipulação) é: " + elementoFinal); // 7


// Ex04
// Função chamada sumArray que aceita um array de números e devolve a soma de todos os números do array.
function sumArray(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i];
    }
    return soma;
}

let myArray1 = [1, 2, 3];
console.log("Soma de [1,2,3]: " + sumArray(myArray1));

let myArray2 = [2, 2, 2, 2];
console.log("Soma de [2,2,2,2]: " + sumArray(myArray2));


// Ex05
// Função chamada returnDay que aceita um parâmetro de 1 a 7 e devolve o dia correspondente.
// Outro numero qualquer a função deve retornar null.
function returnDay(numDia) {

    switch (numDia) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return null;
    }
}

// Testes Ex05
let diaSel = 4;
console.log("O dia" + diaSel + " é: " + returnDay(diaSel));

let diaInv = 8;
console.log("O dia" + diaInv + " é: " + returnDay(diaInv));
function helloClass(){
    alert("olá turma de SoftDev");
}

function helloPerson(){
    alert("Olá António");
}
//Função com argumentos, fica abstracta e reutilizável. Isto é, deteto padrões e defino a função para aglomerar numa só
function hello(greetScope){
    alert("olá " +greetScope)
}

//aqui criamos uma função e chamamos a função de cima (for) no "rant (hate)"
function tellMeWhatYouHate(){
    let hate = prompt("diz-me o que odeias")
    rant(hate)
}


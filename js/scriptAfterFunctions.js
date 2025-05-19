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
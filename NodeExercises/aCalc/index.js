const sumar = (a, b) => {
        askN1 = prompt("Add your first Number");
        askN2 = prompt("Add tour second Number");
        resultado = parseInt(askN1) + parseInt(askN2);
        document.getElementById('resultadoSoma').innerHTML = askN1 + '+' + askN2 + '='+  resultado;
}
const subtrair = (a, b) => {
        askN1 = prompt("Add your first number");
        askN2 = prompt("Add your second number");
        resultado = parseInt(askN1) - parseInt(askN2);
        document.getElementById('resultadoSubtrair').innerHTML = askN1 + '-' + askN2 + '='+  resultado;
}
const multiplicar = (a, b) => {
        askN1 = prompt("Add your first number");
        askN2 = prompt("Add your second number");
        resultado = parseInt(askN1) * parseInt(askN2);
        document.getElementById('resultadoMultiplicar').innerHTML = askN1 + '*' + askN2 + '='+  resultado;
}
const dividir = (a, b) => {
        askN1 = prompt("Add your first number");
        askN2 = prompt("Add your second number");
        resultado = parseInt(askN1) / parseInt(askN2);
        document.getElementById('resultadoDividir').innerHTML = askN1 + '/' + askN2 + '='+  resultado;
}

let subt = document.getElementById('subtrair');
subt.addEventListener('click', function(event){
        subtrair();
});

let mult = document.getElementById('multiplicar');
mult.addEventListener('click', function(event){
        multiplicar();
});

let divi = document.getElementById('dividir');
divi.addEventListener('click', function(event){
        dividir();
});

let soma = document.getElementById('somar');
soma.addEventListener('click', function(event){
          sumar();
});


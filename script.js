function inserir(num){
    var numero = document.getElementById('p_res').innerHTML;
    document.getElementById('p_res').innerHTML = numero + num;
}

function limpar(){
    document.getElementById('p_res').innerHTML = "";
}

function remover(){
    var resultado = document.getElementById('p_res').innerHTML;
    document.getElementById('p_res').innerHTML = resultado.substring(0, resultado.length -1);
}

function calcular(){
    var resultado = document.getElementById('p_res').innerHTML;

    if(resultado){
        document.getElementById('p_res').innerHTML = eval(resultado);
    } else {
        document.getElementById('p_res').innerHTML = "Insira um cálculo"
    }
}
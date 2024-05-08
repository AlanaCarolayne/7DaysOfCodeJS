const x = parseInt(prompt('Digite o 1° numero'));
const y = parseInt(prompt('Digite o 2° numero'));
let operacao = parseInt(prompt('Escolha a operação: \n1- soma\n 2-subtração \n 3-multiplicação\n 4-divisão \n 5-sair'));

switch (operacao) {
    case 1:
        soma(x, y);
        break;
    case 2:
        subtracao(x, y);
        break;
    case 3:
        multiplicacao(x, y);
        break;
    case 4:
        divisao(x, y);
        break;
    case 5:
        alert('Até a próxima ;)');
        break;
    default:
        alert('opcao invalida');
        break;
}
function soma(x, y){
    alert("Resultado: " + (x+y));
 }
 function subtracao(x, y){
     alert("Resultado: " +( x-y));
 }
 function multiplicacao(x, y){
     alert("Resultado: " + (x*y));
 }
 function divisao(x, y){
     alert("Resultado: " + (x/y));
 }
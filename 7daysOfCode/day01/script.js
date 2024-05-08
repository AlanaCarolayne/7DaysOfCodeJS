// o dia 1 tem como intuito praticar a lógica de comparação em js

let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

// dupla igualdade compara apenas o  valor da variavel e não se o tipo tambem é igual.
if(numeroUm ==stringUm){
    console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
}else {
    console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
  }

//   igualdade tripla ou estritamente igual, verifica se são identicos
if(numeroDez === stringDez){ 
      console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

if(numeroTrinta == stringTrinta){
    console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
  } else {
    console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
  }


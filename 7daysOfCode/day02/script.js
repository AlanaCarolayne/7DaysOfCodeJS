 const nome =prompt('Qual seu nome?');
 const idade = prompt('Qual sua idade?');
 const linguagem = prompt('Qual linguagem de programação você está estudando?');

 alert(`Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!"` );

 const x = prompt(`Você gosta de estudar ${linguagem}? Responda com o número 1 para SIM ou 2 para NÃO.`);

 x==1? alert(' Muito bom! Continue estudando e você terá muito sucesso.'): alert('Ahh que pena... Já tentou aprender outras linguagens?');
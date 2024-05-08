const area = prompt('Qual area você deseja seguir? (1- Front-end ou 2- Back-end)');
let especialidade;
if (area == '1') {
    especialidade = prompt('Área escolhida: Front-end \n Deseja aprender React ou VueJS?  ')


} else if (area == 2) {
    especialidade = prompt('Área escolhida: Back-end \n Deseja aprender Java ou C#?  ')

} else {
    alert('opção inválida!');
}
const cont = prompt(`A especialidade escolhida foi ${especialidade}, deseja continuar estudando essa area ou deseja se tornar um fullStack? \n (1- Continuar na area ou 2- Tornar full stack)`);
cont == 1 ? alert(`Você será um especialista em ${especialidade}`) : alert(`Você é ousado, será um otimo dev FullStack`);

let tec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (1- para nao)');

do  {
    let tec = prompt('Tem mais alguma tecnologia que você gostaria de aprender? (1- para nao)');
    let tecnologias = prompt('Qual tecnologia deseja aprender? ');
    alert(tecnologias);

} while (tec != 1);

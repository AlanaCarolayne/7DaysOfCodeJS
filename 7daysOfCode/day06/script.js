const frutas = [];
const laticinios = [];
const congelados = [];
const doce = [];
let resp;
do {
    resp = prompt('Deseja  adicionar ou remover uma comida na sua lista de compras? (1- adicionar 2- remover)');
    if (resp ==1 ) {
        let item = prompt('O que você deseja adicionar a lista?');
        let categoria = prompt('Em qual lista você deseja adiconar este item');
    
        switch (categoria) {
            case 'fruta':
                frutas.push(item);
                break;
            case 'laticinio':
                laticinios.push(item);
                break;
            case 'congelado':
                congelados.push(item);
                break;
            case 'doce':
                doce.push(item);
            break
            default:
                alert('Esta lista não existe')
                break;
        }
    }
   

} while (resp == 1);

alert(`Lista de compras: \nFrutas:  ${frutas} \n Laticínios: ${laticinios} \n Congelados:${congelados} \n Doces:${doce} `);

if(resp==2){
    
let item = prompt('Qual item você deseja remover');
    if (frutas.includes(item)) {
        item = frutas.shift(item);
        frutas.splice(item);
    }else if (laticinios.includes(item)) {
        item = laticinios.shift(item);
        laticinios.splice(item);
    }else  if (congelados.includes(item)) {
        item = congelados.shift(item);
        congelados.splice(item);
    }else  if (doce.includes(item)) {
        item = doce.shift(item);
        doce.splice(item);
    }else{
        alert('Não foi possível encontrar o item dentro da lista!');
    }
}
alert(`Lista de compras: \nFrutas:  ${frutas} \n Laticínios: ${laticinios} \n Congelados:${congelados} \n Doces:${doce} `);

const frutas = [];
const laticinios = [];
const congelados = [];
const doce = [];
let resp;
do {
    resp = prompt('Deseja  adicionar uma comida na sua lista de compras? (1- sim 2- nao)');
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

alert(`Lista de compras: \nFrutas:  ${frutas} \n Laticínios: ${laticinios} \n Congelados:${congelados} \n Doces:${doce} `)
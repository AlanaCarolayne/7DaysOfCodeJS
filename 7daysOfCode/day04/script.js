const rd = Math.floor(Math.random() * 10);
console.log(rd);

let numUsuario = prompt("Adivinhe qual é o numero")


if (numUsuario == rd) {
    alert(`Você acertou, o numero era ${rd}`);
} else {
    for (let i = 0; i <= 2; i++) {
        numUsuario = prompt('Tente novamente');
        if (numUsuario == rd) {
            alert(`Você acertou, o numero era ${rd}`);
            i=3;
        } else {
            i++
        }
    }

}

if (numUsuario != rd) {
    alert(`Você não conseguiu acertar :( \n O numero era ${rd} `)
}
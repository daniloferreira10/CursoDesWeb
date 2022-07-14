
function calcMedia () {
    return (this.notas[0] + this.notas[1] ) / 2;
}

var aluno = {
    nome:"Danilo",
    notas: [6, 8],

    media: calcMedia
}

var aluno1 = {
    nome:"Davi",
    notas: [6, 8],

    media: calcMedia
}

var aluno2 = {
    nome:"Gabriela",
    notas: [7, 8],

    media: calcMedia
}

console.log(aluno.nome)
console.log(aluno.media());

console.log(aluno1.nome)
console.log(aluno1.media());

console.log(aluno2.nome)
console.log(aluno2.media());





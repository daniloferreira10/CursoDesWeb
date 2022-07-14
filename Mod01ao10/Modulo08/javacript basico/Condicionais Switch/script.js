
var mat = 8;
var por = 8;

var media = (mat + por) / 2;
var semestre = ""

if (media >= 6) {
    semestre = "Aprovado" } 
    else {
semestre = "Reprovado"
}

console.log(media)
console.log(semestre)

switch (semestre) {
    case "Aprovado": console.log("Quem planta colhe, parabéns!")
        break;
    case "Reprovado":
        console.log("Não estudo né garotinho, agora só ano que vem.")
        break;
    default:
        console.log("Erro")
        break;
}











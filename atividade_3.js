//Permitir o cadastro da peça somente se ela pesar mais de 100g.
let Peso = 100

if(Peso<100){
    console.log("A peça precisa ter no mínimo 100g")
}else{
    console.log("A peça possui peso adequado")
}

/*Número de peças na lista é de 10 unidades, caso tenha 10 ou mais peças, usuário receberá mensagem: 
lista de peças está lotada.*/
let PecasDeCarro = ["Volante", "Pneu", "Filtro de Óleo"]
console.log (PecasDeCarro)

if(PecasDeCarro.length>=10){
    console.log("Lista de peças está lotada")
}else{
    console.log("Cadastro permitido")
}

//Validar se o nome da peça possui mais de 3 caracteres.
let Caracteres = "Freio de Mão"
console.log (Caracteres)

if(Caracteres.length>3){
    console.log("Nome da peça válido")
}else{
    console.log("Nome da peça precisa ter mais de 3 caracteres")
}


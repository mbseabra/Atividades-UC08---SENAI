//Se o participante for maior de 18 anos, permitir o cadastro; senão, alertar que o cadastro não é permitido pela idade.

let Idade = 27

if(Idade>18){
    console.log("Cadastro permitido")
}else{
    console.log("Idade inválida, necessário ter 18 anos ou mais")
}

//Listar participantes e palestrantes por evento.

let ParticipantesLista = ["Jose", "Maria", "João"]//etc...
let Palestrantes = ["Lucas", "André", "Tiago"]//etc...

/*Enquanto a quantidade de participantes for inferior a 100, permitir cadastro;
 senão, alertar que o cadastro não será permitido por ter excedido o limite.*/

let ParticipantesCadastro = ["Jose", "Maria", "João"]
 console.log (ParticipantesCadastro)
 
if(ParticipantesCadastro.length<100){
    console.log("Cadastro permitido")
}else{
    console.log("Cadastro não permitido; a lista está completa")
}

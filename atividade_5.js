//Percorrer de Zero até o número de alunos

//Se o número for par, escreva ‘par’ e o número correspondente

//Se o número for ímpar, escreva ‘ímpar’ e o número correspondente  

//Se o número for zero, escreva ‘zero’ e o número correspondente 

let NumeroDeAlunos = 10

for (let contador = 0; contador <= NumeroDeAlunos; contador++){
   // console.log(contador)

    if (contador == 0){
        console.log("O número atual é zero")
    }
    else if (contador % 2 == 0){
        console.log("O número " + contador + " é PAR")//concatenação
    }
    else{
        console.log(`O número ${contador} é ÍMPAR`)//interpolação
    }
}

let NumeroDeAlunos = 10

let contador = 0

while (contador <= NumeroDeAlunos){
   // console.log(contador)

    if (contador == 0){
        console.log("O número atual é zero")
    }
    else if (contador % 2 != 0){
        console.log("O número " + contador + " é ÍMPAR")//concatenação
    }
    else{
        console.log(`O número ${contador} é PAR`)//interpolação
    }

    contador++
}

let NomeDeAlunos = ["Marcos","José","Felipe","Lucas"]
 for (let nome of NomeDeAlunos){
    console.log(`Esta pessoa se chama ${nome}`)
 }

 let idade = 27
 let ingresso = true

 if(idade >= 18 && ingresso == true){
    console.log("Bem vindo à festa!")
 }else{
    console.log("Entrada não permitida")
 }




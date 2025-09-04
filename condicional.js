// Operadores Relacionais

// > (Maior que)
// < (Menor que)
// >= (Maior ou igual)
// <= (Menor ou igual)
// == (Igualdade, sem verificar o tipo)
// === (Igualdade estrita, verifica o tipo)
// != (Diferente, sem verificar o tipo)
// !== (Diferente estrito, verifica o tipo)

let numero = "21";
if(numero == 21){
    console.log ("ok");
}

if(numero === 21){
    console.log("ok 2");
}

let bool = true;

if(bool == true){
    console.log("Sim entrou no if")
}

//-----------------------------------------


let variavel1 = "2"
let variavel2 = "4"
let Bool = false


if(variavel1 == 2){
    console.log('A variavel1 tem esse valor');
}else{
    console.log('A variavel1 não tem esse valor!');
}

// Condicional Aninhada
if(variavel1 == 2){
    console.log("A variavel1 tem esse valor");
    if(variavel2 == 4){
        console.log("A variavel2 tem esse valor!");
    }else{
        console.log("A variavel2 não tem esse valor!");
    }
}else{
    console.log("A variavel1 não tem esse valor")
}


// Condicional (diferente)

console.log(1 != '1'); // False(Valores são iguais)
console.log (1 !== '1'); // True(Valores são diferentes)
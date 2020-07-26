let num = [3, 5, 6];

console.log(num);
console.log(`Os valores do vetor são: ${num}`);

num[3] = 8; //JS cria a posição 3
console.log(`O veotr com o novo valor é ${num}`);

num.push(9); //Comando para criar mais uma posição e iserir um valor nela
console.log(`O vetor com o novo valor é ${num}`);

/*
//JS insere o valor mesmo se as posições anteriores forem vazia
num[8]=10;
console.log(`O vetor com o novo valor é ${num}`);
*/

console.log(`O vetor tem ${num.length} elementos`);
console.log(`O vetor ordenado é: ${num.sort()}`);
console.log(`O vetor ainda está ordenado: ${num}`);

console.log('Imprimindo vetor com laço de repetição:')
/*
for(let i=0; i<num.length; i++){
  console.log(`A posição ${i} tem o valor ${num[i]}`);
}
*/

for(let i in num){ //Laço otimizado para percorrer vetores e objetos
  console.log(`A posição ${i} tem o valor ${num[i]}`);
}

let val=5;
let pos = num.indexOf(val);
if(pos == -1){
  console.log(`O valor ${val} não foi encontrado`);
}else{
  console.log(`O valor ${val} está na posição ${pos} do vetor`);
}
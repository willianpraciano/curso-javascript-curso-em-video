var txtnum = document.getElementById('txtnum');
var selecionados = document.getElementById('selecionados');
var res = document.getElementById('res');

var numeros = [];

function adicionar(){
  var num = Number(txtnum.value);

  if(txtnum.value.length == 0){
    window.alert('Por favor, digite um número!');
  }else if(num <0 || num > 100){
    window.alert('Por favor, digite um número entre 0 e 100!');
    txtnum.value = ''; //limpa o valor do 'input'
  }else if(numeros.indexOf(num) != -1 ){
    window.alert('O Valor já foi colocado na Lista');
    txtnum.value = ''; //limpa o valor do 'input'
  }else{
    res.innerText = '';

    numeros.push(num); //adiciona um número na ultima posição do vetor

    let item = document.createElement('option'); //Cria uma 'option' para o 'select'
    item.text = `Valor ${num} adicionado`; //Adiciona o conteudo na 'option'
    selecionados.appendChild(item); //Adiciona a 'option' ao 'select' 
    
    txtnum.value = ''; //limpa o valor do 'input'
    txtnum.focus(); //Focar o cursor ni 'input'
  }
}

function finalizar(){

  if(numeros.length == 0){
    window.alert('Por favor, adicione um valor!');
  }else{
    res.innerText = '';

    let txtTotal = document.createElement('p');
    let txtMaior = document.createElement('p');
    let txtMenor = document.createElement('p');
    let txtSomatorio = document.createElement('p');
    let txtMedia = document.createElement('p');
    
    numeros.sort();
    let quantidade = numeros.length;
    let final = quantidade-1;
    let somatorio = 0;
    
    for(let i in numeros){
      somatorio += numeros[i];
    } 
    let media = somatorio/quantidade;

    txtTotal.innerHTML = `Ao todo temos ${quantidade} numeros cadastrados.`;
    txtMaior.innerHTML = `O Maior valor informado foi ${numeros[final]}.`;
    txtMenor.innerHTML = `O menor valor informado foi ${numeros[0]}.`;
    txtSomatorio.innerHTML = `Somando todos os valores, temos ${somatorio}.`;
    txtMedia.innerHTML = `A média dos valores digitados é ${media}.`;

    
    res.appendChild(txtTotal);
    res.appendChild(txtMaior);
    res.appendChild(txtMenor);
    res.appendChild(txtSomatorio);
    res.appendChild(txtMedia);
  }
}
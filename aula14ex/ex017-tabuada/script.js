function gerarTabuada(){
  var txtnum = document.getElementById('txtnum');
  var num = Number(txtnum.value);

  var tmais = document.getElementById('tmais');
  var tmenos = document.getElementById('tmenos');
  var tvezes = document.getElementById('tvezes');
  var tdivide = document.getElementById('tdivide');

  if(txtnum.value.length == 0){
    window.alert('Por favor, digite um número.');
  }else if(num < 0){
    window.alert('Não é possível fazer tabuada de número negativo!!!\nDigite outro número.');
  }else{
    tmais.innerHTML = '';
    tmenos.innerHTML = '';
    tvezes.innerHTML = '';
    tdivide.innerHTML = '';

    let tituloMais = document.createElement('option');
    let tituloMenos = document.createElement('option');
    let tituloVezes = document.createElement('option');
    let tituloDivide = document.createElement('option');
    
    tituloMais.text = `Tabuada de + do ${num}`;
    tituloMenos.text = `Tabuada de - do ${num}`;
    tituloVezes.text = `Tabuada de x do ${num}`;
    tituloDivide.text = `Tabuada de ÷ do ${num}`;

    tmais.appendChild(tituloMais);
    tmenos.appendChild(tituloMenos);
    tvezes.appendChild(tituloVezes);
    tdivide.appendChild(tituloDivide);
    
    for(var i=0; i<=10; i++){
      //mais[i].innerHTML= `${num} + ${i} = ${num+i}`;
      let imais = document.createElement('option');
      imais.text = `${num} + ${i} = ${num+i}`;
      imais.value = `mais${i}`;
      tmais.appendChild(imais);

      let imenos = document.createElement('option');
      imenos.text = `${num} - ${i} = ${num-i}`;
      imenos.value = `menos${i}`;
      tmenos.appendChild(imenos);

      let ivezes = document.createElement('option');
      ivezes.text = `${num} X ${i} = ${num*i}`;
      ivezes.value = `vezes${i}`;
      tvezes.appendChild(ivezes);

      let idivide = document.createElement('option');
      if(i==0){ //divisão por zero não pode
        idivide.text = `${num} ÷ ${i} = 0 não pode`;
      }else{
        idivide.text = `${num} ÷ ${i} = ${(num/i).toFixed(2).replace('.',',')}`;
      }
      idivide.value = `divide${i}`;
      tdivide.appendChild(idivide);
    }
  }
}
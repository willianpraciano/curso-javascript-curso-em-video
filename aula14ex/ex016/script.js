//alert('Ola');
function contar(){
  let ninicio = document.getElementById('ninicio');
  let nfim = document.getElementById('nfim');
  let npasso = document.getElementById('npasso');
  let res = document.querySelector('div#res');

  if(
    ninicio.value.length == 0 || nfim.value.length == 0 || npasso.value.length == 0){
    res.innerHTML = 'Impossível contar!';
    window.alert('[ERRO] Faltando dados!');
  }else{
    let inicio = Number(ninicio.value);
    let fim = Number(nfim.value);
    let passo = Number(npasso.value);

    if(passo <= 0){
      window.alert('Passo inválido, considerando PASSO=1');
      npasso.innerText = '1';
      passo=1;
    }

    res.innerHTML = '<p>Contando:</p>';
    if(inicio<fim){
      for(let i = inicio; i<=fim; i+=passo){
        res.innerHTML += `${i} `;
        if( i==fim ||i+passo>fim){
          res.innerHTML += '\u{1F3C1} ';//imprime uma bandeira de chegada no final
        }else{
          res.innerHTML += `\u{1F449} `; //imprime um dedo apontando para a direita entre cada número
        }
      }
    }else{
      for(var i = inicio; i>=fim; i-=passo){
        res.innerHTML += `${i} `;
        if( i==fim ||i-passo<fim){
          res.innerHTML += '\u{1F3C1} '; //imprime uma bandeira de chegada no final
        }else{
          res.innerHTML += '\u{1F449} '; //imprime um dedo apontando para a direita entre cada número
        }
      }
    }
    
  }
}
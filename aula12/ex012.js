var agora = new Date();
var horas = agora.getHours();
var minutos = agora.getMinutes();
console.log(`Agora são exatamente ${horas} horas e ${minutos} minutos.`);
if(horas < 12){
  console.log('Bom dia!');
}else if(horas <= 18){
  console.log('Boa tarde!');
}else{
  console.log('Boa noite!');
}
var bars =document.querySelector('.fa-bars');
var slde =document.querySelector('.slde');
var bar =document.querySelector('.bar');
var faxmark =document.querySelector('.fa-xmark');
var col4 =document.querySelector('.col4');
bars.addEventListener('click',function(){
slde.classList.add('w');
bar.classList.add('we')
})
faxmark.addEventListener('click',function(){
slde.classList.remove('w');
bar.classList.remove('we')
})




let tar=new Date("Dec 31, 2023 23:59:59").getTime();

let counter=setInterval(() => {
    let countdown=new Date().getTime();
    let diferrent= tar -countdown;
    let days =Math.floor(diferrent/(1000 * 60 * 60 * 24));
    let hours =Math.floor(diferrent %( 1000 * 60 * 60 * 24)  /(1000 * 60 * 60));
    let minutes =Math.floor(diferrent %( 1000 * 60 * 60)  /(1000 * 60));
    let seconds =Math.floor(diferrent %( 1000 * 60)  /(1000));



if(seconds< 10){
    $('.col4').html(  `0${seconds} s`)
  
}else{
    $('.col4').html(`${seconds} s`)
}
if(minutes< 10){
    $('.col3').html(  `0${minutes} m`)
  
}else{
    $('.col3').html(`${minutes} m`)
}
if(hours< 10){
    $('.col2').html(  `0${hours} h`)
  
}else{
    $('.col2').html(`${hours} h`)
}
if(days< 10){
    $('.col1').html(  `0${days} d`)
  
}else{
    $('.col1').html(`${days} d`)
}

}, 1000);

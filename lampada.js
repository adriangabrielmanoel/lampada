const lamp = document.getElementById('lamp');
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const reviver= document.getElementById('reviver');

function isLampBroken(){
    return lamp.src.indexOf('tvquebrada')> -1;
}
function lampOn(){
    if(!isLampBroken()){
        lamp.src= './img/tvligada.jpg';
    }
}
function lampOff(){
    if(!isLampBroken()){
        lamp.src ='./img/tvdesligada.jpg';

    }
}
function lampBroken(){
    lamp.src = './img/tvquebrada.jpg';                
}
function reviverLamp(){
    lamp.src = './img/tvligada.jpg';                  
}
turnOn.addEventListener('click',lampOn);
turnOff.addEventListener('click',lampOff);
reviver.addEventListener('click',reviverLamp);
lamp.addEventListener('mouseover',lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick',lampBroken);


   
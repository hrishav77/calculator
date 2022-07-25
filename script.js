var storage=0;
var key='unpressed';



function seven(){
    document.getElementById('screen').innerHTML += 7;
}
function eight(){
    document.getElementById('screen').innerHTML += 8;
}
function nine(){
    document.getElementById('screen').innerHTML += 9;
}
function five(){
    document.getElementById('screen').innerHTML += 5;
}
function four(){
    document.getElementById('screen').innerHTML += 4;
}
function six(){
    document.getElementById('screen').innerHTML += 6;
}
function three(){
    document.getElementById('screen').innerHTML += 3;
}
function two(){
    document.getElementById('screen').innerHTML += 2;
}
function one(){
    document.getElementById('screen').innerHTML += 1;
}
function zero(){
    document.getElementById('screen').innerHTML += 0;
}
function sum(){
     document.getElementById('screen').innerHTML+="+";
}
function minus(){
    document.getElementById('screen').innerHTML+="-";
}
function mult(){
    document.getElementById('screen').innerHTML+="x";
}
function divide(){
    document.getElementById('screen').innerHTML+="/";
}
function decimal(){
    document.getElementById('screen').innerHTML+=".";
}
function store(){
   storage= parseFloat(document.getElementById('screen').innerHTML);
   const btn=document.getElementById('store');
   btn.style.backgroundColor='white';
}
function variable(){
    document.getElementById('screen').innerHTML+=storage;
    const btn=document.getElementById('store');
    btn.style.backgroundColor='#febcfe';
    storage="";
}
function power(){
    document.getElementById('screen').innerHTML+="^";
}
function size(){
    const screen=document.getElementById('screen');
    if (key=='unpressed'){screen.style.backgroundColor='white';screen.style.color="black";key='pressed';}
    else{screen.style.backgroundColor=" rgba(40, 80, 56, 0.986)";screen.style.color="white";key='unpressed';}
}

function equal(){
   let words=document.getElementById('screen').innerHTML;
   for (let i = 0; i < words.length; i++) {
    let firstnum="";
    let secondnum="";
    if(words[i]=="+"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)+parseFloat(secondnum) ;
    }
    else if(words[i]=="x"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)*parseFloat(secondnum) ;
    }
    else if(words[i]=="-"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)-parseFloat(secondnum) ;
    }
    else if(words[i]=="/"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)/parseFloat(secondnum) ;
    }
    else if(words[i]=="^"){
        for (let j = 0; j < i; j++){
        firstnum+=words[j];
       }
       for (let k = i+1; k <words.length; k++){
        secondnum+=words[k];
       }
        document.getElementById('screen').innerHTML=parseFloat(firstnum)**parseFloat(secondnum) ;
    }
  }
  
}
function clean(){
    document.getElementById('screen').innerHTML = "";
}

function backspace(){
    let words=document.getElementById('screen').innerHTML,split;
    let update="";
    for (let i = 0; i<words.length-1; i++){
    update+=words[i]
    }
    document.getElementById('screen').innerHTML=update;
}
var timer=60;
var hit =0;
var score=0;
function MakeBubbles(){
var clutter="";
for(var i=1;i<=162;i++){
    var rn= Math.floor(Math.random()*10)    
    clutter+= `<div class="bubble">${rn}</div>`
}
document.querySelector('.container').innerHTML = clutter
}
function HitSocre(){
hit=Math.floor(Math.random()*10);
document.querySelector("#hit").textContent=hit
}

function increasescore(){
    var body = document.querySelector('.container');
    body.addEventListener("click",function(details){
        var det = Number(details.target.textContent)
        if(det===hit){
            score+=10;
            document.querySelector('#score').textContent=score
            MakeBubbles()
            HitSocre()
        }
    })
}
function Runtimer(){

    var RT = setInterval(function(){
      if(timer>0){
          timer--;
          document.querySelector('#time').textContent=timer;
      }
      else{
          clearInterval(RT)
          document.querySelector('.container').innerHTML=`<h1>Your Score is ${score}</h1>`
      }
   },1000)
  
  
  }

MakeBubbles()
Runtimer()
HitSocre()
increasescore()

const decraseBtn=document.getElementById("decrease");
const resetBtn=document.getElementById("reset");
const increaseBtn=document.getElementById("increase");
const countlabel=document.getElementById("countlabel");
let count=0;

increaseBtn.onclick=function(){
    count++;
    countlabel.textContent=count;
}
decraseBtn.onclick=function(){
    count--;
    countlabel.textContent=count;
    }
resetBtn.onclick=function(){
    count=0;
    countlabel.textContent=count;
}
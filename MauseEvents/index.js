

const myBox=document.getElementById("myBox");



function changeColor(event){
    event.target.style.backgroundColor="tomato";
    event.target.textContent="ouch ! 😎";
    
}
myBox.addEventListener("click",changeColor);
myBox.addEventListener("mouseover",event =>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Don't'do it ! 😎";


})
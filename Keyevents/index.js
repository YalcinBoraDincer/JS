
const myBox=document.getElementById("myBox");
const moveAmount=10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    event.preventDefault();
    if (event.key.startsWith("Arrow")){
        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
            }
            myBox.style.top=`${y}px`;
            myBox.style.left=`${x}px`;   
        
    }
})
document.addEventListener("keydown",event =>{
    myBox.style.backgroundColor="tomato";
    myBox.textContent="😯";
})
document.addEventListener("keyup",event =>{
    myBox.style.backgroundColor="aquamarine";
    myBox.textContent="😁";
})
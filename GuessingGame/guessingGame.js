const minNum=1;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;

let attempts=0;
let running=true;
let guess;

while(running){
    guess=window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert("Please enter a valid number");
    }else if (guess<minNum || guess>maxNum){
        window.alert("Please enter a valid number");
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("Too Low Try Again");
        }else if(guess >answer){
            window.alert("Too High Try Again");
        }else{
            window.alert(`Correct the answer is  ${answer}. It took you ${attempts} attempts`)
            running=false;
        }
    }
    console.log(answer);
}




































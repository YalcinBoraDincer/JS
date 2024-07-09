const myCheckBox=document.getElementById("myCheckbox");
const masterCardButton=document.getElementById("masterCardButton");
const visaButton=document.getElementById("visaButton");
const paypalButton=document.getElementById("paypalButton");
const subResult=document.getElementById("subResult");
const paymentResult=document.getElementById("paymentResult");
const mySubmitButton=document.getElementById("mySubmitButton");



mySubmitButton.onclick=function(){
    if (myCheckBox.checked) {
        subResult.textContent= " Your are succesfully subscribed ";
        
    }else{
        subResult.textContent= " Your are not subscribed ";

    }

    if (visaButton.checked) {
        paymentResult.textContent= " Your are paying with visa ";
        
    }else if(masterCardButton.checked){
        paymentResult.textContent= " Your are paying with mastercard ";
    
    }else if(paypalButton.checked){
        paymentResult.textContent= " Your are paying with paypal ";
    
    }else{
        paymentResult.textContent= " Your must select a payment type ";
        
    }

}



m
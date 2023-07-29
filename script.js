let screen= document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let Value='';
for(item of buttons){
    item.addEventListener('click',(btn)=>{
        buttonText=btn.target.innerText;
        console.log("Button text is ",buttonText)
        if (buttonText=='X') {
            buttonText='*';
            Value +=buttonText;
            screen.value =Value;
        }   
        else if (buttonText=='AC') {
            Value='';
            screen.value =Value;
        }
        else if (buttonText=='C') {
            Value= Value.toString().slice(0,-1)
            screen.value =Value;
        }
        else if (buttonText=='=') {
            Value=eval(Value);
            screen.value=Value;
        }
        else{
            Value +=buttonText;
            screen.value =Value;
        }

    })
}
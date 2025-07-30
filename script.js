let string="";
let string2="";
let string3="";

let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click' , (e)=>{
    if(e.target.innerHTML=='='){
        string=eval(string);
        document.querySelector('input').value=string;

    }

    else if(e.target.innerHTML=='C'){
        string3=string;
        string="";
        document.querySelector('input').value=string;


    }

    else  if(e.target.innerHTML=='M+'){
        string3=string;
        let store=string3
        string2=string2+store;

    }

    else  if(e.target.innerHTML=='M-'){
        let store=string3;
        string2=string2-store;

    }

    else  if(e.target.innerHTML=='MC'){
        
        string2="";

    }
    else  if(e.target.innerHTML=='MR'){
        let string4=eval(string2);
        document.querySelector('input').value=string4;
       
    }


    else{
        string=string+(e.target.innerHTML);
        document.querySelector('input').value=string;
    }

    })

})


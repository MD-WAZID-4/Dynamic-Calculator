let string="";
<<<<<<< HEAD
let string2="";

=======
>>>>>>> 89782393110216c41f8575eb68d8d3bbff299464
let buttons=document.querySelectorAll('.btn');

Array.from(buttons).forEach( (button)=>{
    button.addEventListener('click' , (e)=>{
    if(e.target.innerHTML=='='){
        string=eval(string);
        document.querySelector('input').value=string;

    }

    else if(e.target.innerHTML=='C'){
<<<<<<< HEAD
=======
        
>>>>>>> 89782393110216c41f8575eb68d8d3bbff299464
        string="";
        document.querySelector('input').value=string;


    }

<<<<<<< HEAD
    else  if(e.target.innerHTML=='M+'){

        string2=Number(string2)+Number(document.querySelector('input').value);
       
    }

    else  if(e.target.innerHTML=='M-'){
        if(string2==""){
            string2=document.querySelector('input').value;

        }
        else{
            string2=Number(string2)-Number(document.querySelector('input').value);
        }
        
    }

    else  if(e.target.innerHTML=='MC'){
        string2="";
        
      
    }
    else  if(e.target.innerHTML=='MR'){
       

        document.querySelector('input').value=string2;
     
       
    }

=======
>>>>>>> 89782393110216c41f8575eb68d8d3bbff299464

    else{
        string=string+(e.target.innerHTML);
        document.querySelector('input').value=string;
    }

    })

})


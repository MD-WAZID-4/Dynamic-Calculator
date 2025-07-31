let string = "";
let string2 = "";
let buttons = document.querySelectorAll('.btn');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == '=') {
            string = eval(string);
            document.querySelector('input').value = string;
        } 
        
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML == 'c') {
            string = string.slice(0, -1);
            document.querySelector('input').value =string;
        } 
        
        else if (e.target.innerHTML == 'M+') {
            string2 = Number(string2) + Number(document.querySelector('input').value);
        } 
        
        else if (e.target.innerHTML == 'M-') {
            if (string2 == "") {
                string2 = document.querySelector('input').value;
            }
            
            else {
                string2 = Number(string2) - Number(document.querySelector('input').value);
            }
        }
         else if (e.target.innerHTML == 'MC') {
            string2 = "";
        }
        
        else if (e.target.innerHTML == 'MR') {
            document.querySelector('input').value = string2;
        } 
        
        else {
            string = string + (e.target.innerHTML);
            document.querySelector('input').value = string;
        }
    });
});

var buttons= document.getElementsByTagName("button");
var display= document.getElementById("display-content");
var operand1=0;
var operand2=null;
var operator=null;
// display.innerText=operand1;

for(var i=0;i<buttons.length;i++)
{
    
    buttons[i].addEventListener('click', function() 
    {
       var value= this.getAttribute('data-value');

       if(value =='+')
       {
            operator='+';
            operand1= parseFloat(display.textContent);

            display.innerText="";
       }
       else if(value =='-')
       {
            operator='-';
            operand1= parseFloat(display.textContent);
            
            display.innerText="";
       }
       else if(value =='*')
       {
            operator='*';
            operand1= parseFloat(display.textContent);
            
            display.innerText="";
       }
       else if(value =='/')
       {
            operator='/';
            operand1= parseFloat(display.textContent);
            
            display.innerText="";
       }
       else if(value =='delete')
       {
            var n=parseInt(display.textContent);
            var res=parseInt(n/10);
            if(res == 0)
            {
                res="";
            }
            display.innerText=res;
       }
       else if(value =='%')
       {
            operator='%';
            operand1= parseFloat(display.textContent);
            
            display.innerText="";
       }
       else if(value == '=')
       {
            operand2=parseFloat(display.textContent);
            if(operator=='%')
            {
                operator='*';
                operand2=operand2/100;

            }
            var result= eval(operand1+" "+operator+" "+operand2);
            display.innerText=result;
       }
       else if(value == 'C')
       {
            operand1=0;
            operand2=null;
            operator=null;
            display.innerText="";

       }
       else
       {
            display.innerText+=value;

       }
        
    });
}






document.onkeydown = function(event) {

	var key_press = String.fromCharCode(event.keyCode);
	var key_code = event.keyCode;
	var input = document.querySelector('#display-content');
	var inputVal = input.innerHTML;
	var btnVal = this.innerHTML;
  var lastChar = inputVal[inputVal.length - 1];
  var equation = inputVal;
	// Using regex to replace all instances of x, ÷, ^ with *, / and ** respectively. 
	equation = equation.replace(/x/g, '*').replace(/÷/g, '/').replace(/\^/g, '**');

 // Target each keypress and update the input screen
  
    if(key_press==1) {
      input.innerHTML += key_press;
  }
    if(key_press==2) {
      input.innerHTML += key_press; 
  }
    if(key_press==3 || key_code == 32) {
      input.innerHTML += key_press; 
  }
    if(key_press==4) {
      input.innerHTML += key_press; 
  }
    if(key_press==5) {
      input.innerHTML += key_press; 
  }
    if(key_press==6 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==7) {
      input.innerHTML += key_press; 
  }
    if(key_press==8 && event.shiftKey == false) {
      input.innerHTML += key_press; 
  }
    if(key_press==9) {
      input.innerHTML += key_press; 
  }
    if(key_press==0) {
      input.innerHTML += key_press;
  }
  
  
  
    if ((inputVal != '' && operator == null && key_code == 187 && event.shiftKey) || (key_code == 107) || (key_code == 61 && event.shiftKey)) {
      document.querySelector('#display-content').innerHTML += '+';
  }
    if ((inputVal != '' && operator== null && key_code == 189 && event.shiftKey) || (inputVal != '' && operator==null && key_code == 107)) {
      document.querySelector('#display-content').innerHTML += '-';
  }
    if ((inputVal != '' && operator==null && key_code == 56 && event.shiftKey) || (inputVal != '' && operator==null && key_code == 106)) {
      document.querySelector('#display-content').innerHTML += 'x';
  }
    if ((inputVal != '' && operator == null && key_code == 191) || (inputVal != '' && operator== null && key_code == 111)) {
      document.querySelector('.screen').innerHTML += '÷';
  }
    if ((inputVal != '' && operator == null && key_code == 54 && event.shiftKey)) {
      document.querySelector('.screen').innerHTML += '^';
  }
    if(key_code==13 || key_code==187 && event.shiftKey == false) {
      input.innerHTML = eval(equation);
      //reset decimal added flag
      decimalAdded =false;
  }
    if(key_code==8 || key_code==46) {
			input.innerHTML = '';
			decimalAdded = false;
  }
}
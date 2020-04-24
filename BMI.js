var answer = document.getElementsByClassName("scroll2");
var myresult = document.getElementsByClassName("result");


answer[0].addEventListener("click", myfunc1)


function myfunc1(){
		
var a = parseInt(document.getElementById("height").value);	

var b = parseInt(document.getElementById("weight").value);			
		
var bmi_read = (b)/((a/100)**2)
	
myresult[0].innerHTML = bmi_read;
		
	}

myfunc1()


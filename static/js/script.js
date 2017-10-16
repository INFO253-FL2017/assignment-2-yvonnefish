/* Calculates a mathematical expression, like 5 * 4 - 3 
Returns the result */ 
function isEmpty(content) {
	if(content === "")
  {
    return true;
  }
    return false;
}

function handleClick(){
	var input_name = document.getElementById("number").value;
	//console.log(input_name);
	var input_subject = document.getElementById("subject").value;
	//console.log(input_subject);
	var input_message = document.getElementById("message").value;
	//console.log(input_message);
	var output = document.querySelectorAll("div")[0];
	//console.log(output);

	var alert = " is a required field";
	var alerts = " are required fields";
	var complete = input_name + ", Your message has been sent";



	if(isEmpty(input_name) === false && isEmpty(input_subject) === false && isEmpty(input_message) === false)
  {
    output.innerHTML = complete;
//    var form = document.getElementById("contactForm");
//    form.submit();
    return true;
  }
   	else if(isEmpty(input_name) === false && isEmpty(input_subject) === false && isEmpty(input_message) === true){
   		output.innerHTML = document.getElementById("message").name + alert;
   	}
   	else if(isEmpty(input_name) === false && isEmpty(input_subject) === true && isEmpty(input_message) === false){
   		output.innerHTML = document.getElementById("subject").name + alert;
   	}
   	else if(isEmpty(input_name) === false && isEmpty(input_subject) === true && isEmpty(input_message) === true){
   		output.innerHTML = document.getElementById("subject").name + ", " + document.getElementById("message").name + alerts;
   	}
   	else if(isEmpty(input_name) === true && isEmpty(input_subject) === false && isEmpty(input_message) === false){
   		output.innerHTML = document.getElementById("number").name + alert;
   	}
   	else if(isEmpty(input_name) === true && isEmpty(input_subject) === false && isEmpty(input_message) === true){
   		output.innerHTML = document.getElementById("number").name + ", " + document.getElementById("message").name + alerts;
   	}
   	else if(isEmpty(input_name) === true && isEmpty(input_subject) === true && isEmpty(input_message) === false){
   		output.innerHTML = document.getElementById("number").name + ", " + document.getElementById("subject").name + alerts;
   	}
   	else if(isEmpty(input_name) === true && isEmpty(input_subject) === true && isEmpty(input_message) === true){
   		output.innerHTML = document.getElementById("number").name + ", " +  document.getElementById("subject").name +  ", " + document.getElementById("message").name + alerts;
   		
   	}
   	
   	return false;

	/*
	var result = calculateExpression(input);
	console.log(result);

	var output = document.querySelectorAll("div")[0];
	console.log(output);
	if (result>100&& result<=1000) {
	output.classList.remove();
	output.classList.add("greaterThan100");
	}else if (result>1000&& result<=10000) {
	output.classList.remove();
	output.classList.add("greaterThan1000");
	}else if (result>10000) {
	output.classList.remove();
	output.classList.add("greaterThan10000");
	}
	output.innerHTML = result;
	return false;
	*/ 
}


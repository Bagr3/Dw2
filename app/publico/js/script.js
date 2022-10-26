function validateForms(){

	var errors = true;

	let nameForm = document.querySelector("input#nameItem");

	let message = document.querySelector("input#messageItem");

	let cpf = document.querySelector("input#cpfItem");
	let strCPF = cpf.value;

	let emailForm = document.querySelector("input#emailItem");
	let email = emailForm.value;

	let pass = document.querySelector("input#passwordItem");

	let tel = document.querySelector("input#telItem");

	let msg = document.querySelector("input#msgItem");

	let country = document.querySelector("select#countryItem");

	let check = document.querySelector("input#checkItem");

	let errorMsg1 = document.querySelector("span#errorMsg1");
	let errorMsg2 = document.querySelector("span#errorMsg2");
	let errorMsg3 = document.querySelector("span#errorMsg3");
	let errorMsg4 = document.querySelector("span#errorMsg4");
	let errorMsg5 = document.querySelector("span#errorMsg5");
	let errorMsg6 = document.querySelector("span#errorMsg6");

	if(nameForm.value.trim() == ""){ //Name Valitador
		errorMsg1.innerHTML = "Fill in the field Name <br>";
		errors = false;
	}

	else if (nameForm.value.length<3) {
		errorMsg1.innerHTML = "Name must have 3 or more chars <br>";
		errors = false;
	}

	else
		errorMsg1.innerHTML = "";




	//CPF Valitador

	if(cpf.value.trim() == "" || strCPF == "00000000000"){
		errorMsg3.innerHTML = "Fill the field CPF <br>";
		errors = false;
	}
	else{
		var soma;
		var Resto;
		soma = 0;
		for (i=1; i<=9; i++)
			soma = soma + parseInt(strCPF.substring(i-1, i)) * (11 - i); 
		Resto = (soma * 10) % 11; //CPF Valitador

		if ((Resto == 10) || (Resto == 11))
			Resto = 0;

		if (Resto != parseInt(strCPF.substring(9, 10))){
			errorMsg3.innerHTML = "Set a valid CPF <br>";
			errors = false;
		}

		soma = 0;
		for (i = 1; i <= 10; i++)
			soma = soma + parseInt(strCPF.substring(i-1, i)) * (12 - i);
		Resto = (soma * 10) % 11;
		if ((Resto == 10) || (Resto == 11))
			Resto = 0;
		if (Resto != parseInt(strCPF.substring(10, 11) )){
			errorMsg3.innerHTML = "Set a valid CPF <br>";
			errors = false;
		}

		else{
			errorMsg3.innerHTML = "";
		}
	}



	//Email Valitador

	function errorEmail(){
		errorMsg4.innerHTML = "Set a valid Email <br>";
		errors = false;
	}

	user = email.substring(0, email.indexOf("@"));
	domain = email.substring(email.indexOf("@")+ 1, email.length);
	if ((user.length >=1) &&
		(domain.length >=3) &&
		(user.search("@")==-1) &&
		(domain.search("@")==-1) &&
		(user.search(" ")==-1) &&
		(domain.search(" ")==-1) &&
		(domain.search(".")!=-1) &&
		(domain.indexOf(".") >=1)&&
		(domain.lastIndexOf(".") < domain.length - 1)){
		erroMsg4.innerHTML = "";
	}
	else
		errorEmail();
	

		
	//Password Valitador
	if(pass.value.trim() == ""){ 
		errorMsg5.innerHTML = "Fill in the field Password <br>";
		errors = false;
	}

	else if (pass.value.length<8) {
		errorMsg5.innerHTML = "Password must have 8 or more chars <br>";
		errors = false;
	}
	else
		errorMsg5.innerHTML = "";

	
	//Tel Valitador
	if(tel.value.trim() == ""){ 
		errorMsg6.innerHTML = "Fill in the field Tel <br>";
		errors = false;
	}

	else if(tel.value!=1 || tel.value!=2 || tel.value!=3 || tel.value!=4 ||
		tel.value!=5 || tel.value!=6 || tel.value!=7 || tel.value!=8 || tel.value!=9)
		errorMsg6.innerHTML = "Just Numbers!";

	else if (tel.value.length<8) {
		errorMsg6.innerHTML = "Tel must have 8 or more chars <br>";
		errors = false;
	}
	else
		errorMsg6.innerHTML = "";



	if(msg.value.trim() == ""){ //message Valitador
		errorMsg7.innerHTML = "Fill in the field message <br>";
		errors = false;
	}

	else
		errorMsg7.innerHTML = "";



	
	if(country[0].selected){ //Country Validator
		errorMsg8.innerHTML = "Select a country!";
		errors = false;
	}
	else
	errorMsg8.innerHTML = "";


	if(check.checked){ //Check Validator
		checkM.style.color = "white";
	}
	else{
		checkM.style.color = "red";
		errors = false;
	}

	if(errors){
		return true;
	}
	else{
		return false;
	}
}


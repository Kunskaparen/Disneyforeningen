//Javascript placeholder

var ieAlert = function(){
	alert("Synd, för det får du inte!")
};

var taUppgifter = function(){ 
	document.getElementById("submitLogin").addEventListener("onclick",login);
}
var login = function(){
	var enteredName  = document.getElementById("enteredName");
	var enteredPassword = document.getElementById("enteredPassword");
	var loginuppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginuppgifter){
		if (användarnamn.toLowerCase == enteredName.toLowerCase && loginuppgifter[användarnamn] == enteredPassword){
			alert("Du är nu inloggad på sidan!")
			var inloggad = true
			var inloggadsom = användarnamn
		}
	}
}


window.onload = taUppgifter;

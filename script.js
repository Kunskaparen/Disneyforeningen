//Javascript placeholder

var ieAlert = function(){
	alert("Synd, för det får du inte!")
};

var taUppgifter = function(){ 
	document.getElementById("submitLogin").addEventlistener("onclick",login,True);
}
var login = function(){
	var enteredName = document.getElementById("enteredName").value;
	var enteredPassword
	var loginUppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginUppgifter){
		if (användarnamn.toLowerCase == enteredName.toLowerCase && loginUppgifter[användarnamn] == enteredPassword){
			var inloggad = True
			var inloggadSom = användarnamn
			}
		}
	}
};

window.onload = taUppgifter;

//Javascript placeholder

var ieAlert = function(){
	alert("Synd, för det får du inte!")
};

var taUppgifter = function(){ 
	document.getElementById("submitLogin").addEventlistener("onclick",login,True);
}
var login = function(){
	
	var loginuppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginuppgifter){
		if (användarnamn.toLowerCase == enteredname.toLowerCase && loginuppgifter[användarnamn] == enteredpassword){
			var inloggad = True
			var inloggadsom = användarnamn
			}
		}
	}
};

window.onload = taUppgifter;

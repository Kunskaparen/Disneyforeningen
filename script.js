//Javascript placeholder

var ieAlert = function(){
	alert("Synd, för det får du inte!")
};

var taUppgifter = function(){ 
	document.getElementById("submitLogin").addEventListener("onclick",login);
}
var login = function(){
<<<<<<< HEAD
	var enteredName = document.getElementById("enteredName").value;
	var enteredPassword
	var loginUppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginUppgifter){
		if (användarnamn.toLowerCase == enteredName.toLowerCase && loginUppgifter[användarnamn] == enteredPassword){
			var inloggad = True
			var inloggadSom = användarnamn
			}
=======
	var enteredName  = document.getElementById("enteredName");
	var enteredPassword = document.getElementById("enteredPassword");
	var loginuppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginuppgifter){
		if (användarnamn.toLowerCase == enteredName.toLowerCase && loginuppgifter[användarnamn] == enteredPassword){
			alert("Du är nu inloggad på sidan!")
			var inloggad = true
			var inloggadsom = användarnamn
>>>>>>> 1f7bbfa82f418fb4544dad2f4202b1c6089d0bbe
		}
	}
}


window.onload = taUppgifter;

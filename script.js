//Javascript placeholder

var ieAlert = function(){
	alert("Synd, för det får du inte!")
};

var taUppgifter = function(){ 
	document.getElementById("submitLogin").addEventListener("click",login,true);
}
var login = function(){
	var enteredName = document.getElementById("enteredName").value;
	var enteredPassword = document.getElementById("enteredPassword").value;
	var loginUppgifter = {"Baloo":"Halabaloo"};
	for(var användarnamn in loginUppgifter){
		if (enteredName == null || enteredName == undefined || enteredName == ""){
			console.log("Inget användarnamn")
			alert("Skriv in ett användarnamn")
		}
		else if (enteredPassword == null || enteredPassword == undefined || enteredPassword == ""){
		console.log("Inget lösenord")
		alert("Skriv in ett lösenord")
		}
		else if (användarnamn.toLowerCase == enteredName.toLowerCase && loginUppgifter[användarnamn] == enteredPassword){
				var inloggad = true
				var inloggadSom = användarnamn
				console.log("Login lyckades")
				console.log("Inloggad som: "+användarnamn)
				alert("Du är inloggad som: "+användarnamn)
				break
		}
		else{
				console.log("Login misslyckades")
				alert("Du loggades inte in");
		}
	}
}

window.onload = taUppgifter;
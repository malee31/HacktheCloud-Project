function getMessages()
{
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		var resJSON = JSON.parse(data.currentTarget.responseText);
		return resJSON;
	});
	xhr.open("GET", window.location.origin + "/dbread");
	xhr.send();
}

function showMessages(){
	document.getElementById("test").innerHTML = JSON.stringify(getMessages());
}

function sendMessage(message, user){
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		var resJSON = JSON.parse(data.currentTarget.responseText);
		return resJSON;
	});
	xhr.open("GET", window.location.origin + "/dbread");
	xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
	xhr.send(JSON.stringify({ "email": "hello@user.com", "response": { "name": "Tester" } }));
}

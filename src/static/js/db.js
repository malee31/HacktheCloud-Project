function getMessages()
{
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		console.log(data);
		var resJSON = JSON.parse(data.currentTarget.responseText);
		return resJSON;
	});
	xhr.open("GET", window.location.origin + "/database");
	xhr.send();
}
function showMessages(id){
	document.getElementById(id).innerHTML = getMessages();
}
function sendMessage(messag, user){
}

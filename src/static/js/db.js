const messageLocation = document.querySelector("#info");

function getMessages(cb)
{
	if(typeof cb != "function") cb = () => {};
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		var resJSON = JSON.parse(data.currentTarget.responseText);
		return cb(resJSON);
	});
	xhr.open("GET", window.location.origin + "/database");
	return xhr.send();
}

function setMessage(elem)
{
	getMessages(data => {
		elem.innerText = data;
	});
}

function startMessages(button)
{
	button.style.animationName = "fadeOut";
	messageLocation.style.animationName = "fadeOut";
	setTimeout(() => {button.parentNode.removeChild(button);}, 2000);
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

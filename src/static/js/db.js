const messageLocation = document.querySelector("#info");

function getMessages(cb)
{
	if(typeof cb != "function") cb = () => {};
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		console.log(data);
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

function sendMessage(){
	
}

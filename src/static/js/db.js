var messageLocation;
var time = 1;

window.onload = () => {
	messageLocation = document.querySelector("#info");
};

function getMessages(cb)
{
	if(typeof cb != "function") cb = () => {};
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		var resJSON = JSON.parse(data.currentTarget.responseText);
		return cb(resJSON);
	});
	xhr.open("GET", window.location.origin + "/dbread");
	return xhr.send();
}

function setMessage(elem)
{
	getMessages(data => {
		var message = data["Items"][Math.floor(Math.random()*data["Items"].length)];
		document.getElementById('info').innerText = message.message.S;
	});
}

function startMessages(button)
{
	if(time != 1) return;
	button.style.animationName = "fadeOut";
	setTimeout(() => {button.parentNode.removeChild(button);}, 2000);
	messageLocation.style.opacity = 1;
	timer = setInterval(() => {
		setMessage(messageLocation);
	}, 5000);

}

function sendMessage(message){
	if(message != '' && message != null){
		alert("Thanks for making someone's day a bit better :)");
		let xhr = new XMLHttpRequest();
		xhr.addEventListener("load", data => {
			var resJSON = data.currentTarget.responseText;
			console.log(resJSON);
			return resJSON;
		});
		xhr.open("POST", window.location.origin + "/dbpost");
		xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		xhr.send(JSON.stringify({"message": message}));
		document.getElementById('myText').value = '';
	}
}

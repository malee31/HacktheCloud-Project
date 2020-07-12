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
function sendMessage(){

}

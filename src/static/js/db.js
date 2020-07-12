function getItems()
{
	let xhr = new XMLHttpRequest();
	xhr.addEventListener("load", data => {
		console.log(data);
		var resJSON = JSON.parse(data.currentTarget.responseText);
		document.getElementById('test').innerHTML = JSON.stringify(resJSON);
	});
	xhr.open("GET", window.location.origin + "/database");
	xhr.send();
}

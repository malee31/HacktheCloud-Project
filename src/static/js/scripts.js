var clicks = 0;
var currentSelection = "relaxed";
var injectLocation;
window.onload = () => {
	 injectLocation = document.getElementById("sadness");
};

function generateOutput(button)
{
	if(/motivated/.test(currentSelection)) generateImage(clicks % images.length);
	else if(/entertained/.test(currentSelection)) generateVideo(clicks % videos.length);
	else if (/relaxed/.test(currentSelection)) generateAudio(clicks % audioTracks.length);
	else console.log("No match: " + currentSelection);
	button.innerText = getItem();
	injectLocation.classList.add("expand");
	clicks++;
}

function generateVideo(index)
{
	injectLocation.innerHTML = '';
	let vid = document.createElement('video'); 
	let source = document.createElement('source');
	//vid.setAttribute("width", 666);
	//vid.setAttribute("height", 420);
	vid.setAttribute("controls", "");
	vid.setAttribute("autoplay", "");
	source.setAttribute("src", videos[index]);
	source.setAttribute("type", "video/mp4");
	vid.appendChild(source);
	injectLocation.appendChild(vid);
}

function generateAudio(index)
{
	injectLocation.innerHTML = "";
	let audio = document.createElement("audio");
	let source = document.createElement("source");
	source.src = audioTracks[index];
	source.type = "audio/mp3";
	audio.setAttribute("autoplay", "");
	audio.onended = generateOutput;
	audio.appendChild(source);
	injectLocation.appendChild(audio);
}

function generateImage(index)
{
	let img = document.createElement('img');
	img.src = images[index];
	img.onload = res => {
		injectLocation.innerHTML = "";
		injectLocation.appendChild(res.target);
	};
}

function selection(elem)
{
	currentSelection = elem.value;
}

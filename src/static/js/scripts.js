var currentSelection = "relaxed";
var injectLocation;
window.onload = () => {
	 injectLocation = document.getElementById("sadness");
};

function generateOutput(button)
{
	if(/motivated/.test(currentSelection)) generateImage(Math.floor(Math.random()*images.length));
	else if(/entertained/.test(currentSelection)) generateVideo(Math.floor(Math.random()*videos.length));
	else if (/relaxed/.test(currentSelection)) generateAudio(Math.floor(Math.random()*audioTracks.length));
	else console.log("No match: " + currentSelection);
	injectLocation.classList.add("expand");
	clicks++;
}

function generateVideo(index)
{
	if(/youtube/.test(videos[index])){
		injectLocation.innerHTML = '';
		let vid = document.createElement('iframe');
		vid.setAttribute('width', 560);
		vid.setAttribute('height', 315);
		vid.setAttribute('src', videos[index]+'?autoplay=1');
		vid.setAttribute('allow', "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
		vid.setAttribute('frameborder', "0");
		vid.setAttribute('allowfullscreen', "");
		injectLocation.appendChild(vid);
	} else {
		injectLocation.innerHTML = '';
		let vid = document.createElement('video'); 
		let source = document.createElement('source');
		vid.setAttribute("controls", "");
		vid.setAttribute("autoplay", "");
		source.setAttribute("src", videos[index]);
		source.setAttribute("type", "video/mp4");
		vid.appendChild(source);
		injectLocation.appendChild(vid);
	}
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

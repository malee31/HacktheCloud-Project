var clicks = 0;
var currentSelection = "entertained";
var injectLocation;
window.onload = () => {
	 injectLocation = document.getElementById("sadness");
};

function generateOutput()
{
	if(/motivated/.test(currentSelection)) generateImage(clicks % images.length);
	else if(/entertained/.test(currentSelection)) generateVideo(videos[clicks % videos.length]);
	else if (/relaxed/.test(currentSelection)) console.log("Audio WIP");
	else console.log("No match: " + currentSelection);
	injectLocation.classList.add("expand");
	clicks++;
}

function generateVideo(src)
{
	injectLocation.innerHTML = '';
	let vid = document.createElement('video'); 
	let source = document.createElement('source');
	//vid.setAttribute("width", 666);
	//vid.setAttribute("height", 420);
	vid.setAttribute("controls", "");
	vid.setAttribute("autoplay", "");
	source.setAttribute("src", src);
	source.setAttribute("type", "video/mp4");
	vid.appendChild(source);
	injectLocation.appendChild(vid);
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

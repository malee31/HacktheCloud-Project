var clicks = 0;
var selection = "relaxed"
function generateOutput()
{
	generateVideo(videos[clicks % videos.length]);
	clicks++;
}

function generateVideo(src)
{
	document.getElementById('sadness').innerHTML = '';
	let vid = document.createElement('video'); 
	let source = document.createElement('source');
	vid.setAttribute("width", 666);
	vid.setAttribute("height", 420);
	vid.setAttribute("controls", "");
	vid.setAttribute("autoplay", "");
	source.setAttribute("src", src);
	source.setAttribute("type", "video/mp4");
	vid.appendChild(source);
	document.getElementById('sadness').appendChild(vid);
}

function selection(elem)
{
	selection = elem.value;
}

console.log("wow");
var clicks = 0;
var vid;
var source;
function dostuff()
{
  document.getElementById('sadness').innerHTML = '';
  vid = document.createElement('video'); 
  source = document.createElement('source');
  vid.setAttribute("width", 666);
  vid.setAttribute("height", 420);
  vid.setAttribute("controls", "");
  source.setAttribute("src", videos[clicks % videos.length]);
  source.setAttribute("type", "video/mp4");
  vid.appendChild(source);
  document.getElementById('sadness').appendChild(vid);
  clicks++;
}

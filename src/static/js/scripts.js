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
var videos = [
'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
]

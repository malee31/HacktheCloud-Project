console.log("wow");
var click = false;
function dostuff()
{
  if(click){

  } else {
    click = true;
    var vid = document.createElement('video');
    var source = document.createElement('source');
    vid.setAttribute("width", 666);
    vid.setAttribute("height", 420);
    vid.setAttribute("controls", "");
    source.setAttribute("src", "https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4");
    source.setAttribute("type", "video/mp4");
    vid.appendChild(source);
    document.getElementById('sadness').appendChild(vid);
  }
}

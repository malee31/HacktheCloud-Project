const videos = [
'https://file-examples-com.github.io/uploads/2017/04/file_example_MP4_1920_18MG.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
];

const images = [
"https://preview.redd.it/a4ldmpqzkv841.jpg?width=640&crop=smart&auto=webp&s=b33129869320677ae1693b9b6d449a66154b7294",
"https://i.imgur.com/45hPCJnr.jpg",
"https://i.redd.it/q4cgd2me61a51.jpg",
"https://preview.redd.it/hcnnvs4zsv951.png?width=640&crop=smart&auto=webp&s=c29bbfdf6c8341840e5744bc7452cc117d7533c6",
"https://preview.redd.it/cpboj9kcig951.jpg?width=640&crop=smart&auto=webp&s=19935395eafafb359518c1299d827fedf48e43b9",
"https://i.redd.it/bu9bdxaq1a951.jpg",
"https://preview.redd.it/z2y15r6n58951.jpg?width=640&crop=smart&auto=webp&s=14f6dc1ee8320a50ece0bcaf53f96bd0d1fd650f",
"https://preview.redd.it/yhc3xpdid0951.jpg?width=640&crop=smart&auto=webp&s=011bb337f1f600dcbdf0e4ba6fff6e83d1903964",
"https://preview.redd.it/m7pk4q0qhl851.jpg?width=640&crop=smart&auto=webp&s=8c5786d4d7c3a371cc35ae6df46dad7c39ffbc06",
"https://i.redd.it/wnqh0lc9rl851.jpg",
"https://preview.redd.it/m2phxlygva851.jpg?width=640&crop=smart&auto=webp&s=eb2c561fd78bc118c182adac2da2790182be6685",
"https://preview.redd.it/v2lya74wvy751.jpg?width=640&crop=smart&auto=webp&s=423ad9ea4196ba3f1a8dbad6aa8cc3f9afefd40f",
"https://i.redd.it/acmif3u7nw751.jpg"
];

const audio = [

];

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
	source.setAttribute("src", src);
	source.setAttribute("type", "video/mp4");
	vid.appendChild(source);
	document.getElementById('sadness').appendChild(vid);
}

function selection(elem)
{
	selection = elem.value;
}

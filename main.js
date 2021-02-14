var noseX = 0;
var noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/W43rJksd/handlebar-moustache-cartoon-clip-art-cute-mustache-cliparts.jpg")
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on('pose', gotPoses)
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(moustache, noseX - 15, noseY - 5, 40, 20);
}

function take_snapshot(){
   save("Ihave-moustache.jpg");
}

function modelLoaded(){
    console.log("PoseNet is intialized");

}


function gotPoses(results){ 
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = "+ noseX );
        console.log("nose y = "+ noseY);
    }
}

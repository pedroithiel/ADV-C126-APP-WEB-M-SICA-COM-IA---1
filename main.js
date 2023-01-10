var som1 = "";
var som2 = "";

var leftWristX = 0;
var leftWristY = 0;

var rightWristX = 0;
var rightWristY = 0;

var scoreRightWrist = 0;
var scoreLefttWrist = 0;
var statusMusica1 = "";
var statusMusica2 = "";

function preload() {
    som1 = loadSound("music.mp3");
    som2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(500, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on("pose", gotPose);
}

function draw() {
    image(video, 0, 0, 500, 500);
    fill("#ed1405");
    stroke("#ed1405");
    
    som1.isPlaying()

    if(scoreLefttWrist > 0.2){ 
        circle(leftWristX,leftWristY,10);
        som2.stop();

        if(statusMusica1 == false){
            som1.play()
            document.getElementById("nomeDaMusica").innerHTML = "harry potter";
            statusMusica1 = true
        }
    }

}
function modelLoad() {
    console.log("model load!");
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        scoreLefttWrist = results[0].pose.keypoints[9].score;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}


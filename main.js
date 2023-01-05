som1 = "";
som2 = "";

leftWristX = 0
leftWristY = 0

rightWristX = 0
rightWristy = 0
function preload() {
    som1 = loadSound("music.mp3");
    som2 = loadSound("music2.mp3");

}

function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoad);
    poseNet.on("pose", gotPose);
}

function draw() {
    image(video, 0, 0, 400, 400);
}
function modelLoad() {
    console.log("model load!");
}

function gotPose(results) {
    if (results.length > 0) {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
    }
}
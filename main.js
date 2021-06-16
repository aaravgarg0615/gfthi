function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,140),
    video.hide();
    poseNet  = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}
function preload(){
    loadImage('https://thumbs.dreamstime.com/z/image-lips-painted-lipstick-drop-dripping-down-them-98215670.jpg')
    loadImage('https://lh3.googleusercontent.com/proxy/i92adsyUlYxuwgO9xN0xufkNHv-gJk9qi0_4XfezCLLdTJWHEY4VJbZCkr69Vtn_9k3u57-K1xMWH9jOs7QbuA55Jw8M8cQtZuYd')
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0){
    console.log(results);
    console.log("mustache  x = " + results[0].pose.mustache.x);
    console.log("mustache y = " + results[0].pose.mustache.y);
    console.log("LIPS  x = " + results[0].pose.lips.x);
    console.log("lips y = " + results[0].pose.lips.y);
    }
}

function draw(){
    image(video, 0, 0, width, height);
}

function take_snapshot(){
    save('myFilterImage.png');
}
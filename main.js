nose_x  = 0 ;
nose_y = 0 ;

function preload(){
    nose = loadImage("https://i.postimg.cc/W4jDMP1C/unnamed.png");
}

function setup(){
    canvas = createCanvas(300 , 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300 , 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose' , gotPoses);
}

function draw(){
    image(video , 0 , 0 , 300 , 300);
    image(nose , nose_x , nose_y , 70 , 70 );
    
}

function take_snapshot(){
    save('Image 1');
}

function modelloaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nose_x = results[0].pose.nose.x-33 ;
        nose_y = results[0].pose.nose.y-20;
        console.log("Nose x  =" + nose_x );
        console.log("Nose y  =" + nose_y);
    }
}
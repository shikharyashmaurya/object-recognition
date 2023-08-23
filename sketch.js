let video;

// For displaying the label
let label = "waiting...";

// The classifier
let classifier;
let modelURL = 'https://teachablemachine.withgoogle.com/models/LibZ178CM/';
// let modelURL="https://teachablemachine.withgoogle.com/models/Xl9K_i1to/"
// Loading  model
function preload() {
  classifier = ml5.imageClassifier(modelURL + 'model.json');
}


function setup() {

  createCanvas(640, 520);

  // Create the video

  video = createCapture(VIDEO);
  video.hide();

  // STEP 2: Start classifying
  classifyVideo();
}

// classifying  videeo
function classifyVideo() {

  classifier.classify(video, gotResults);

}

function draw() {

  background(0);

  // Drawing  video
  image(video, 0, 0);

  // Drawing  label

  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);

  
}

// Getting classification
function gotResults(error, results) {

  // if something went wrong!
  if (error) {

    console.error(error);
    return;

  }

  // Storing label and classifying again

  label = results[0].label;
  classifyVideo();
  
}

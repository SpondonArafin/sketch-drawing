function preload() {
classifier = ml5.imageClassifier('Doodlenet');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
background("white");
synth = window.speechSynthesis;
canvas.mouseReleased(classifyCanvas);
}

function draw() {
stroke(0,0,0);
strokeWeight(13);
if (mouseIsPressed) {
line(pmouseX,pmouseY,mouseX,mouseY);
}
}

function clearCanvas() {
background("white");
}

function classifyCanvas() {
classifier.classify(canvas,gotResult);
}

function gotResult(error, results) {
    if(error) {
    console.error(error);
    }

    if(results) {
        console.log(results);
document.getElementById("confidence").innerHTML = "Confidence: " + Math.round(results[0].confidence *100) + "%"; 
document.getElementById("label").innerHTML = "Label: " + results[0].label;
utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
    }


}
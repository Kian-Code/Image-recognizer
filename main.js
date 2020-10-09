Webcam.set({
    width:350,
    height:290,
    image_format:'png',
    png_quality:90
});
Camera = document.getElementById("Camera");
Webcam.attach('#Camera');

function Take_Snapshot()
{
    Webcam.snap(function(data_url){
        document.getElementById("Result").innerHTML = '<img id = "Captured_Img" src = "'+data_url+'" >'
    });

}

console.log('ml5 version:' , ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/y2qOkVxSM/model.json' , modelLoaded);
function modelLoaded()
{
  console.log('Model Loaded')
}

function Check()
{
    img = document.getElementById('Captured_Img');
    classifier.classify(img, Got_Result);

}

function Got_Result(error, results)
{
if (error) {
    console.error(Error);
}
else {
    console.log(results);
    document.getElementById("Result_Object_Name").innerHTML = results[0].label;
    document.getElementById("Result_Object_Accuracy").innerHTML = results[0].confidence.toFixed(3);
    
}
}
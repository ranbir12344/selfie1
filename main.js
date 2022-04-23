var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
document.getElementById("textbook").innerHTML="";
recognition.start();
}
recognition.onresult= function(event) {
console.log(event);
var Content= event.results[0][0].transcript;
document.getElementById("textbook").innerHTML=Content;
console.log(Content);
if(Content=="take my selfie")
{
console.log("talking selfie---");
speak();
}

}
function speak(){
var synth=window.speechSynthesis;
speak_data=document.getElementById("textbook").value;
speak_data="Taking you Selfie in 5 seconds";
var utterThis= new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach(camera);
setTimeout(function()
{
    take_snapshot();
},5000);
}
Webcam.set({
width:360,
height:250,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
function take_snapshot()
{
Webcam.snap(function(data_uri) {
document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">';


});


}
function setTimeOutButton() {
setTimeout(
function(){
    alert("set TimeOut Button");
}, 3000);
}






















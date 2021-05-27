const { ipcRenderer } = require("electron");



//https://www.tutorialspoint.com/electron/electron_audio_and_video_capturing.html
//https://codepen.io/ZubayerR/pen/NWRWMPa
//https://www.npmjs.com/package/electron-speech

/*
var Speech = require('electron-speech')
 
var recog = Speech({
  lang: 'en-US',
  continuous: true
})
 
recog.on('text', function (text) {
  console.log(text)
});
 
recog.listen()
*/

const SpeechRecognition =
     window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = () => {
    console.log("start of recognition");
};

recognition.onend = function () {
    recognition.continuous = true;
    recognition.start();
    console.log("end of recognition");
};

recognition.onerror = function (event) {
    console.log(`Error occurred in recognition: ${event.error}`);
};

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    console.log(transcript)
};

//DISCORD
class App {
  constructor() {
    console.log("LOG depuis la page HTML");
    this.initListeners();
  }
  initListeners() {
    ipcRenderer.on("messageDiscord", this.onMessage.bind(this));
  }

  //MESSAGE RECIEVED
  onMessage(event, message, names) {
    console.log("message reçu: " + message);
  }
}

//ON LOAD
function onLoad() {
  new App();
}

window.onload = onLoad();

if (! "webkitSpeechRecognition" in window) {
    alert("Speech Recognition Not Available")
} 

let SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;
let SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList;
let SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent;

let recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = false;
recognition.lang = 'id';

recognition.onError = () => {
    console.log('error...')
};

recognition.onresult = function (event) {
    console.log(event.result)

    textResult=event.results[event.results.length-1][0].transcript

    console.log(textResult)
    document.querySelector("#result")
        .insertAdjacentHTML('afterend', `<p>${textResult}</p>`)
}

document.querySelector("#start").onclick = () => {
    recognition.start();
};

document.querySelector("#stop").onclick = () => {
    recognition.stop();
};



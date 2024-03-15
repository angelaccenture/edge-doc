const AUDIO_FOLDER = "/audioClips/";
const ConfirmSound = "SFX_UI_Confirm.mp3";
const TapSounds = [("SFX_UI_Tap-001.mp3"),("SFX_UI_Tap-002.mp3"),("SFX_UI_Tap-003.mp3"),("SFX_UI_Tap-004.mp3"),("SFX_UI_Tap-005.mp3")];
const PageTurnSounds = [("SFX_UI_PageTurn-001.mp3"),("SFX_UI_PageTurn-002.mp3"),("SFX_UI_PageTurn-003.mp3")];

let lastRandom;

//HTML AUDIO
function playAudio(clipName){
    //console.log("Playing: "+clipName);
    const audio = new Audio(AUDIO_FOLDER+clipName);
    audio.play();
}

function playAudioRandom(clipNames){
    let randomClip;
    do{ 
        randomClip = clipNames[Math.floor(Math.random()*clipNames.length)];
    } while (randomClip === lastRandom);
    lastRandom = randomClip;
    playAudio(randomClip);
}

//WEB AUDIO API
let audioContext;
let activeBufferSource;
let activeGainNode;

function initAudio () { 
    audioContext = new AudioContext();
    audioContext.resume();
    //console.log(audioContext.state);

}

function playMusic(clipName, fadeTime = 2){
    GetFile(clipName).then((audioBuffer)=>{
        let bufferSource = audioContext.createBufferSource();
        bufferSource.buffer = audioBuffer;
        bufferSource.loop= true;

        let gainNode = audioContext.createGain();
        bufferSource.connect(gainNode);
        gainNode.connect(audioContext.destination);

        bufferSource.start();
        activeBufferSource = bufferSource;
        activeGainNode = gainNode;
        fadeIn(gainNode, fadeTime);
    });
}

function musicTransitionTo(clipName){
    fadeOutAndStop(activeBufferSource,activeGainNode,4);
    playMusic(clipName, 2);
}

function stopCurrentMusic(){
    console.log("Stopping");
    fadeOutAndStop(activeBufferSource,activeGainNode,4);
}

function fadeIn(gainNode, fadeTime){
    gainNode.gain.setValueAtTime(0.001, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(1, audioContext.currentTime + fadeTime);
}

function fadeOutAndStop(bufferSource, gainNode, fadeTime){
    gainNode.gain.setValueAtTime(gainNode.gain.value, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + fadeTime);
    setTimeout(function () {
        bufferSource.stop();    
        //console.log("Stop");
    }, fadeTime*1000);
}

function LowerCurrentVolume(){
    activeGainNode.gain.setValueAtTime(1, audioContext.currentTime);
    activeGainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 2);
}

async function GetFile(clipName) {
    const response = await fetch(AUDIO_FOLDER+ clipName);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
    return audioBuffer;
}




function audio() {
    const main = document.createElement('div');
    const text = document.createTextNode('Hello World');
    main.appendChild(text);
    document.body.appendChild(main);

    const recordButton = document.createElement('button');
    const startText = document.createTextNode('record');
    recordButton.className = 'start-recording-button';
    recordButton.appendChild(startText);
    document.body.appendChild(recordButton);

    const cancelButton = document.createElement('button');
    const canceltext = document.createTextNode('cancel');
    cancelButton.className = 'cancel-recording-button';
    cancelButton.appendChild(canceltext);
    document.body.appendChild(cancelButton);

    const stopButton = document.createElement('button');
    const stopText = document.createTextNode('stop');
    stopButton.className = 'stop-recording-button';
    stopButton.appendChild(stopText);
    document.body.appendChild(stopButton);

    // document.addEventListener('DOMContentLoaded', function () {
        var startRecordingButton = document.querySelector('.start-recording-button');
        var recordingControlButtonsContainer = document.querySelector('.recording-contorl-buttons-container');
        var cancelRecordingButton = document.querySelector('.cancel-recording-button');
        var elapsedTimeContainer = document.querySelector('.elapsed-time');
        var stopRecordingButton = document.querySelector('.stop-recording-button');
        // var textIndicationOfAudioPlaying = document.querySelector('.text-indication-of-audio-playing');
        // var overlay = document.querySelector('.overlay');
        // var closeBrowserNotSupportedBox = document.querySelector('.close-browser-not-supported-box');
        var audioElement = document.querySelector('.audio-element');
        // var audioElementSource = document.getElementsByClassName("source");
        var audioRecorder = {
            audioBlobs: [],
            mediaRecorder: null,
            streamBeingCaptured: null,
        
            start: function () {
                if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
                    return Promise.reject(new Error('mediaDevices API or getUserMedia method is not supported in this browser.'));
                } else {
                    return navigator.mediaDevices.getUserMedia({ audio: true })
                        .then(function (stream) {
                            audioRecorder.streamBeingCaptured = stream;
                            audioRecorder.mediaRecorder = new MediaRecorder(stream);
                            audioRecorder.audioBlobs = [];
        
                            audioRecorder.mediaRecorder.addEventListener("dataavailable", function (event) {
                                audioRecorder.audioBlobs.push(event.data);
                            });
        
                            audioRecorder.mediaRecorder.start();
                        });
                }
            },
        
            stop: function () {
                return new Promise(function (resolve) {
                    var mimeType = audioRecorder.mediaRecorder.mimeType;
        
                    audioRecorder.mediaRecorder.addEventListener("stop", function () {
                        var audioBlob = new Blob(audioRecorder.audioBlobs, { type: mimeType });
                        resolve(audioBlob);
                    });
                    audioRecorder.cancel();
                });
            },
        
            cancel: function () {
                audioRecorder.mediaRecorder.stop();
                audioRecorder.stopStream();
                audioRecorder.resetRecordingProperties();
            },
        
            stopStream: function () {
                audioRecorder.streamBeingCaptured.getTracks().forEach(function (track) {
                    track.stop();
                });
            },
        
            resetRecordingProperties: function () {
                audioRecorder.mediaRecorder = null;
                audioRecorder.streamBeingCaptured = null;
            }
        };

        // function handleDisplayingRecordingControlButtons() {
        //     // Assuming microphoneButton is a global variable
        //     var microphoneButton = document.querySelector('.start-recording-button');
        //     // Assuming recordingControlButtonsContainer is a global variable
        //     var recordingControlButtonsContainer = document.querySelector('.recording-contorl-buttons-container');
        
        //     // Hide the microphone button that starts audio recording
        //     microphoneButton.style.display = "none";
        
        //     // Display the recording control buttons
        //     recordingControlButtonsContainer.classList.remove("hide");
        
        //     // Handle the displaying of the elapsed recording time
        //     handleElapsedRecordingTime();
        // }
    
        startRecordingButton.addEventListener('click', function () {
            // recordingControlButtonsContainer.classList.remove('hide');
            // startRecordingButton.classList.add('hide');
            // Add logic for starting audio recording here
            console.log("Recording Audio...");

            //If a previous audio recording is playing, pause it
            // let recorderAudioIsPlaying = !audioElement.paused; // the paused property tells whether the media element is paused or not
            // console.log("paused?", !recorderAudioIsPlaying);
            // if (recorderAudioIsPlaying) {
            //     audioElement.pause();
            //     //also hide the audio playing indicator displayed on the screen
            //     hideTextIndicatorOfAudioPlaying();
            // }

            //start recording using the audio recording API
            audioRecorder.start()
                .then(() => { //on success

                    //store the recording start time to display the elapsed time according to it
                    audioRecordStartTime = new Date();
                    console.log(audioRecordStartTime);

                    //display control buttons to offer the functionality of stop and cancel
                    // handleDisplayingRecordingControlButtons();
                })
                .catch(error => { //on error
                    //No Browser Support Error
                    if (error.message.includes("mediaDevices API or getUserMedia method is not supported in this browser.")) {
                        console.log("To record audio, use browsers like Chrome and Firefox.");
                        displayBrowserNotSupportedOverlay();
                    }

                    //Error handling structure
                    switch (error.name) {
                        case 'AbortError': //error from navigator.mediaDevices.getUserMedia
                            console.log("An AbortError has occured.");
                            break;
                        case 'NotAllowedError': //error from navigator.mediaDevices.getUserMedia
                            console.log("A NotAllowedError has occured. User might have denied permission.");
                            break;
                        case 'NotFoundError': //error from navigator.mediaDevices.getUserMedia
                            console.log("A NotFoundError has occured.");
                            break;
                        case 'NotReadableError': //error from navigator.mediaDevices.getUserMedia
                            console.log("A NotReadableError has occured.");
                            break;
                        case 'SecurityError': //error from navigator.mediaDevices.getUserMedia or from the MediaRecorder.start
                            console.log("A SecurityError has occured.");
                            break;
                        case 'TypeError': //error from navigator.mediaDevices.getUserMedia
                            console.log("A TypeError has occured.");
                            break;
                        case 'InvalidStateError': //error from the MediaRecorder.start
                            console.log("An InvalidStateError has occured.");
                            break;
                        case 'UnknownError': //error from the MediaRecorder.start
                            console.log("An UnknownError has occured.");
                            break;
                        default:
                            console.log("An error occured with the error name " + error.name);
                    };
                });
        });
    
        cancelRecordingButton.addEventListener('click', function () {
            // recordingControlButtonsContainer.classList.add('hide');
            // startRecordingButton.classList.remove('hide');
            // Add logic for canceling audio recording here
            console.log("Canceling audio...");

            //cancel the recording using the audio recording API
            audioRecorder.cancel();

            //hide recording control button & return record icon
            // handleHidingRecordingControlButtons();
                });
    
        stopRecordingButton.addEventListener('click', function () {
            // recordingControlButtonsContainer.classList.add('hide');
            // startRecordingButton.classList.remove('hide');
            // Add logic for stopping audio recording here
            console.log("Stopping Audio Recording...");

            //stop the recording using the audio recording API
            audioRecorder.stop()
                .then(audioAsblob => {
                    //Play recorder audio
                    playAudio(audioAsblob);

                    //hide recording control button & return record icon
                    // handleHidingRecordingControlButtons();
                })
                .catch(error => {
                    //Error handling structure
                    switch (error.name) {
                        case 'InvalidStateError': //error from the MediaRecorder.stop
                            console.log("An InvalidStateError has occured.");
                            break;
                        default:
                            console.log("An error occured with the error name " + error.name);
                    };
                });
                });
    
        // closeBrowserNotSupportedBox.addEventListener('click', function () {
        //     overlay.classList.add('hide');
        // });
    
        // Add logic for playing audio and updating elapsed time here
        function playAudio(recorderAudioAsBlob) {
            let sourceElement = document.createElement("source");
            audioElement.appendChild(sourceElement);

            audioElementSource = sourceElement;
            let reader = new FileReader();
        
            reader.onload = function (e) {
                let base64URL = e.target.result;
        
                if (!audioElementSource)
                    createSourceForAudioElement();
        
                audioElementSource.src = base64URL;
        
                let BlobType = recorderAudioAsBlob.type.includes(";") ?
                    recorderAudioAsBlob.type.substr(0, recorderAudioAsBlob.type.indexOf(';')) : recorderAudioAsBlob.type;
                audioElementSource.type = BlobType;
        
                audioElement.load();
        
                console.log("Playing audio...");
                audioElement.play();
        
                displayTextIndicatorOfAudioPlaying();
            };
        
            reader.readAsDataURL(recorderAudioAsBlob);
        }
        
        function handleElapsedRecordingTime() {
            displayElapsedTimeDuringAudioRecording("00:00");
        
            elapsedTimeTimer = setInterval(function () {
                let elapsedTime = computeElapsedTime(audioRecordStartTime);
                displayElapsedTimeDuringAudioRecording(elapsedTime);
            }, 1000);
        }
        
        function displayElapsedTimeDuringAudioRecording(elapsedTime) {
            elapsedTimeTag.innerHTML = elapsedTime;
        
            if (elapsedTimeReachedMaximumNumberOfHours(elapsedTime)) {
                stopAudioRecording();
            }
            console.log(displayElapsedTimeDuringAudioRecording);
        }

        
        function elapsedTimeReachedMaximumNumberOfHours(elapsedTime) {
            let elapsedTimeSplitted = elapsedTime.split(":");
            let maximumRecordingTimeInHoursAsString = maximumRecordingTimeInHours < 10 ? "0" + maximumRecordingTimeInHours : maximumRecordingTimeInHours.toString();
        
            if (elapsedTimeSplitted.length === 3 && elapsedTimeSplitted[0] === maximumRecordingTimeInHoursAsString)
                return true;
            else
                return false;
        }
        
        function computeElapsedTime(startTime) {
            let endTime = new Date();
            let timeDiff = endTime - startTime;
            timeDiff = timeDiff / 1000;
        
            let seconds = Math.floor(timeDiff % 60);
            seconds = seconds < 10 ? "0" + seconds : seconds;
        
            timeDiff = Math.floor(timeDiff / 60);
            let minutes = timeDiff % 60;
            minutes = minutes < 10 ? "0" + minutes : minutes;
        
            timeDiff = Math.floor(timeDiff / 60);
            let hours = timeDiff % 24;
            timeDiff = Math.floor(timeDiff / 24);
            let days = timeDiff;
        
            let totalHours = hours + (days * 24);
            totalHours = totalHours < 10 ? "0" + totalHours : totalHours;
        
            if (totalHours === "00") {
                return minutes + ":" + seconds;
            } else {
                return totalHours + ":" + minutes + ":" + seconds;
            }
        }
    // });
}

(function() {
    const reverbinator = document.querySelector('.reverbinator');
    const reverbinatorLabel = document.querySelector('.reverbinator-label');
    const reverbinatorTeeth = document.querySelectorAll('.reverbinator-reel-teeth');
    const reverbinatorToggle = document.querySelector('.reverbinator-toggle');
    const reverbinatorString = window.location.search;
    const reverbinatorParams = new URLSearchParams(reverbinatorString);
    const reverbinatorTheme = reverbinatorParams.get('theme');

    reverbinator.classList.add(reverbinatorTheme);

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia ({ audio: true })
            .then(function(stream) {
                const mediaRecorder = new MediaRecorder(stream);
                function toggleRecording() {
                    reverbinatorToggle.classList.toggle('recording');
                    for (var i = 0; i < reverbinatorTeeth.length; i++) {
                        reverbinatorTeeth[i].classList.toggle('recording');
                    }
                }
                reverbinatorToggle.onclick = function() {
                    if (this.classList.contains('recording')) {
                        toggleRecording();
                        mediaRecorder.stop();
                    } else {
                        toggleRecording();
                        mediaRecorder.start();
                    }
                };
                let chunks = [];
                mediaRecorder.onstop = function(e) {
                    const clipName = prompt('Please enter a name for your Reverbinator clip:');
                    reverbinatorLabel.removeChild(document.querySelector('.reverbinator-clip'));
                    const clipContainer = document.createElement('div');
                    const clipLabel = document.createElement('p');
                    const audio = document.createElement('audio');
                    clipContainer.classList.add('reverbinator-clip');
                    audio.setAttribute('controls', '');
                    clipLabel.innerHTML = clipName;
                    clipContainer.appendChild(clipLabel);
                    clipContainer.appendChild(audio);
                    reverbinatorLabel.appendChild(clipContainer);
                    const blob = new Blob(chunks, { 'type' : 'audio/ogg; codecs=opus' });
                    chunks = [];
                    const audioURL = window.URL.createObjectURL(blob);
                    audio.src = audioURL;
                };
                mediaRecorder.ondataavailable = function(e) {
                    chunks.push(e.data);
                };
            })
            .catch(function(err) {
                alert('Reverbinator error: ' + err);
            }
        );
    } else {
        reverbinator.classList.add('reverbinator-error');
    }
})();

export default function decorate(block) {
    const videoData = {
        url: block.getAttribute('data-url'),
    };

    const videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player';

    const videoElement = document.createElement('video');
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('autoplay', '');
    videoElement.setAttribute('muted', '');
    videoElement.setAttribute('aria-label', 'Video Player');

    const sourceElement = document.createElement('source');
    sourceElement.setAttribute('src', videoData.url);
    sourceElement.setAttribute('type', 'video/mp4');

    videoElement.appendChild(sourceElement);
    videoPlayer.appendChild(videoElement);

    block.textContent = '';
    block.appendChild(videoPlayer);
}

// Create or find the video wrapper
let videoWrapper = document.querySelector('.video-wrapper');
if (!videoWrapper) {
    videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    document.body.appendChild(videoWrapper);
}

// Create the video block
const videoBlock = document.createElement('div');
videoBlock.id = 'video-block';
videoBlock.setAttribute('data-url', 'https://myoffice.accenture.com/personal/j_c_thomas_accenture_com/_layouts/15/stream.aspx?id=%2Fpersonal%2Fj%5Fc%5Fthomas%5Faccenture%5Fcom%2FDocuments%2FMicrosoft%20Teams%20Chat%20Files%2Fseed%2D225721745%5Fscene%2D0%5Fprofile%2Dcolorful%5Fstrength%2D100%2Emp4&referrer=StreamWebApp%2EWeb&referrerScenario=AddressBarCopied%2Eview');

// Append the video block to the video wrapper
videoWrapper.appendChild(videoBlock);

// Call the decorate function on the newly created video block
// decorate(videoBlock);

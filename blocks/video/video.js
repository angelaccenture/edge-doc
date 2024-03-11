export default function decorate(block) {
    const videoData = {
        url: block.getAttribute('data-url'),
        title: block.getAttribute('data-title'),
        metaData: block.getAttribute('data-meta')
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

    const titleElement = document.createElement('h2');
    titleElement.textContent = videoData.title;
    videoPlayer.appendChild(titleElement);

    const metaDataElement = document.createElement('p');
    metaDataElement.textContent = videoData.metaData;
    videoPlayer.appendChild(metaDataElement);

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
videoBlock.setAttribute('data-url', 'https://example.com/video.mp4');
videoBlock.setAttribute('data-title', 'Video Title');
videoBlock.setAttribute('data-meta', 'Video Metadata');

// Append the video block to the video wrapper
videoWrapper.appendChild(videoBlock);

// Call the decorate function on the newly created video block
decorate(videoBlock);

export default function decorate(block) {
    const videoData = {
        url: block.getAttribute('data-url')
    };

    const videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player';

    const iframeElement = document.createElement('iframe');
    iframeElement.setAttribute('src', videoData.url);
    iframeElement.setAttribute('frameborder', '0');
    iframeElement.setAttribute('allowfullscreen', '');
    iframeElement.setAttribute('width', '560');
    iframeElement.setAttribute('height', '315');
    videoPlayer.appendChild(iframeElement);

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
videoBlock.setAttribute('data-url', 'https://www.youtube.com/embed/NPJNPrshhTo?si=nk67foSYY02f4ISg&amp'); // Example YouTube embed URL

// Ensure only one video block is appended to the video wrapper
videoWrapper.innerHTML = '';
videoWrapper.appendChild(videoBlock);

// Call the decorate function on the newly created video block
decorate(videoBlock);

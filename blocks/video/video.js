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
    videoPlayer.appendChild(iframeElement);

    block.textContent = '';
    block.appendChild(videoPlayer);
}

let videoWrapper = document.querySelector('.video-wrapper');
if (!videoWrapper) {
    videoWrapper = document.createElement('div');
    videoWrapper.className = 'video-wrapper';
    document.body.appendChild(videoWrapper);
}

const videoBlock = document.createElement('div');
videoBlock.id = 'video-block';
videoBlock.setAttribute('data-url', 'https://www.youtube.com/embed/NPJNPrshhTo?si=nk67foSYY02f4ISg&amp');

videoWrapper.innerHTML = '';
videoWrapper.appendChild(videoBlock);

decorate(videoBlock);


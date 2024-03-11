export default function decorate(block, videoData) {
    const main = document.createElement('div');
    
    const videoPlayer = document.createElement('div');
    videoPlayer.className = 'video-player';

    const videoElement = document.createElement('video');
    videoElement.setAttribute('controls', '');
    videoElement.setAttribute('autoplay', '');
    videoElement.setAttribute('muted', ''); // Muted attribute is necessary for autoplay to work in most browsers
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

    main.appendChild(videoPlayer);
    
    block.textContent = '';
    block.appendChild(main);
}

// Example usage
window.onload = () => {
    const videoBlock = document.createElement('div');
    videoBlock.id = 'video-block';
    document.body.appendChild(videoBlock);

    decorate(videoBlock, {
        url: 'https://example.com/video.mp4',
        title: 'Video Title',
        metaData: 'Video Metadata'
    });
};

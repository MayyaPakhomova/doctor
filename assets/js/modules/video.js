const videoBlock = document.querySelector('[data-video-block]');

if (videoBlock) {
  const video = videoBlock.querySelector('[data-video]');
  const preview = videoBlock.querySelector('[data-video-preview]');
  const playButton = videoBlock.querySelector('[data-video-play]');

  videoBlock.addEventListener('click', () => {
    video.src = video.dataset.src;

    preview.style.display = 'none';
    playButton.style.display = 'none';
    video.style.display = 'block';

    video.play();
  }, { once: true });
}
/**
 * Videos
 */

// TODO: Convert to JavaScript class

// Vendors
import $ from 'jquery';

// Play button event handler
$('html').on('click', '[data-video-play]', event => {
  if (typeof event !== 'undefined') {
    event.preventDefault();
  }

  const self = $(event.currentTarget);
  const videoId = self.data('video-id') || self.data('video-play');
  const videoSource = self.data('video-source');
  const videoFrame = document.createElement('iframe');

  if (videoId == '') {
    console.Error(
      'Either the "video-play" or "video-id" data attribute must be set to a valid YouTube or Vimeo video ID.'
    );
    return;
  }

  if (videoSource === 'vimeo') {
    videoFrame.src = `https://player.vimeo.com/video/${videoId}?badge=0&byline=0&portrait=0&title=0&autoplay=1`;
  } else {
    videoFrame.src = `https://www.youtube.com/embed/${videoId}?modestbranding=1&autohide=1&showinfo=0&autoplay=1&rel=0`;
  }

  videoFrame.className = 'video-modal__frame';
  videoFrame.setAttribute('allowFullScreen', '');

  $('.video-modal__player').append(videoFrame);
});

$('html').on('click', '[data-video-modal-close]', event => {
  if (typeof event !== 'undefined') {
    event.preventDefault();
  }

  $('.video-modal').removeClass('video-modal--visible');
  $('html').removeClass('video-modal-is-visible');
  $('.video-modal__player .video-modal__frame').remove();
});

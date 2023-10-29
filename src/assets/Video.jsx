import React, { useEffect, useRef, useState } from 'react';

function Video() {
  const videoSlideshow = useRef(null);
  const videoSources = ['video1.mp4', 'video2.mp4'];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    function changeVideo() {
      const newIndex = (currentVideoIndex + 1) % videoSources.length;
      setCurrentVideoIndex(newIndex);
    }

    // Handle video loading
    videoSlideshow.current.addEventListener('loadeddata', () => {
      setVideoLoaded(true);
      videoSlideshow.current.play(); // Play after the new video has loaded
    });

    // Handle video ended
    videoSlideshow.current.addEventListener('ended', changeVideo);

    // Change the video source
    videoSlideshow.current.src = videoSources[currentVideoIndex];
    videoSlideshow.current.load(); // Load the new video

    // Start the interval for changing videos
    const interval = setInterval(changeVideo, 8000);

    return () => {
      clearInterval(interval);
    };
  }, [currentVideoIndex]);

  return (
    <div>
      <video
        ref={videoSlideshow}
        autoPlay
        muted
        className='absolute inset-0 w-full h-full object-cover'
        onLoadedData={() => {
          if (videoLoaded) {
            videoSlideshow.current.play(); // Resume playing after source change
          }
        }}
      ></video>
    </div>
  );
}

export default Video;

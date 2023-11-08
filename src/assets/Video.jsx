import React, { useRef, useEffect } from 'react';

function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Use the videoRef to access the video element
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div>
      <video
        ref={videoRef}
        src="https://vid.cdn-website.com/247eb106/videos/dGIpF5rTMOnEYbJQ3JxQ_Icelandmomentbackgroud_headervideo-v.mp4"
        autoPlay
        muted
        className='absolute inset-0 w-full h-full object-cover'
      ></video>
    </div>
  );
}

export default Video;

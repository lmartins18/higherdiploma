import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PiSpinnerBold } from "react-icons/pi";


const VideoPlayer = ({ query }) => {
  const [videoId, setVideoId] = useState(null);
  const [loading, setLoading] = useState(true);
  const apiKey = "YOURKEY";
  useEffect(() => {
    setLoading(true);
    // Get first video from youtube using query.
    const fetchVideoId = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/youtube/v3/search?q=${query}&part=snippet&maxResults=1&type=video&key=${apiKey}`
        );
        // Get first video.
        if (response.data.items.length > 0) {
          const firstVideoId = response.data.items[0].id.videoId;
          setVideoId(firstVideoId);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
      }
    };

    fetchVideoId().then(() => setLoading(false));
  }, [query]);


  const YoutubePlayer = () => videoId ? (
    <iframe className="absolute top-0 right-0 bottom-0 left-0 w-full h-full" title="youtube video"
      src={`https://www.youtube.com/embed/${videoId}`}>
    </iframe>
  ) : (
    <p className='absolute top-0 p-[25%]'>No video found for:<br /> "{query}"</p>
  );

  return (
    <div className='relative overflow-hidden w-full pt-[250px] flex justify-center'>
      {loading
        ? <p className="animate-spin absolute top-0 bottom-0 p-[25%] text-xl"><PiSpinnerBold /></p>
        : <YoutubePlayer />
      }
    </div>
  );
};
export default VideoPlayer;
// REFERENCES
// https://www.w3schools.com/howto/howto_css_responsive_iframes.asp
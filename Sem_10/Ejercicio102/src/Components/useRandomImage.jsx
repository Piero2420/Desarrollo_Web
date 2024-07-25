/* eslint-disable no-unused-vars */
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
const useRandomImage = (images, interval = 1000) => {
    const [currentImage, setCurrentImage] = useState(images[0]);

    useEffect(() => {
        const changeImage = () => {
          const randomIndex = Math.floor(Math.random() * images.length);
          setCurrentImage(images[randomIndex]);
        };
    
        const intervalId = setInterval(changeImage, interval);
        return () => clearInterval(intervalId);
      }, [images, interval]);
    return currentImage
}

export default useRandomImage
import { useEffect, useState } from "react";

const useImagePreload = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = [
    "./img/commster.png",
    "./img/chesster.png",
    "./img/eric.jpg",
    "./img/tasker.png",
  ];

  useEffect(() => {
    let loadedCount = 0;
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = () => {
        loadedCount += 1;
        if (loadedCount === imageUrls.length) {
          const myTimeout = setTimeout(() => setImagesLoaded(true), 2000);
        }
      };
      img.onerror = () => {
        console.error(`failed to load image: ${url}`);
      };
    });
  }, [imageUrls]);

  return imagesLoaded;
};

export default useImagePreload;

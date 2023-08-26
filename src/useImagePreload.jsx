import { useEffect, useState } from "react";

const useImagePreload = () => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const imageUrls = [
    "./img/commster.png",
    "./img/chesster.png",
    "./img/eric.jpg",
    "./img/tasker.png",
    "./img/linkedin.png",
    "./img/github.png",
    "./img/techs/aws.png",
    "./img/techs/css.png",
    "./img/techs/express.png",
    "./img/techs/flask.png",
    "./img/techs/git.png",
    "./img/techs/html.png",
    "./img/techs/js.png",
    "./img/techs/linux.png",
    "./img/techs/mongo.png",
    "./img/techs/node.png",
    "./img/techs/postgres.png",
    "./img/techs/python.png",
    "./img/techs/react.png",
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
  }, []);

  return imagesLoaded;
};

export default useImagePreload;

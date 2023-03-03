import { useState, useEffect } from "react";

function ImageSlider({ images, duration = 3000 }) {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, duration);

    return () => clearInterval(intervalId);
  }, [currentImage, duration, images.length]);

  return (
    <div className="bg-blue-100">
      <div className="relative h-[44rem] m-8 w-[-500px]">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slideshow image ${index}`}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;

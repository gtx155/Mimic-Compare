import { useState } from 'react';

const ImageComponent = () => {
  // Array of local image paths
  const images = ['./src/assets/ComfyUI_00049_.jpg', './src/assets/ComfyUI_00050_.jpg', './src/assets/ComfyUI_00050_.jpg', './src/assets/ComfyUI_00066_.jpg'];

  // State to hold the currently displayed image
  const [currentImage, setCurrentImage] = useState(images[0]);

  // Function to handle image click and set a new random image
  const handleImageClick = () => {
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setCurrentImage(randomImage);
  };

  return (
    <div className="img-flex">
        <img src={currentImage} alt="random" onClick={handleImageClick} />
        <img src={currentImage} alt="random" onClick={handleImageClick} />
    </div>
  );
};

export default ImageComponent;
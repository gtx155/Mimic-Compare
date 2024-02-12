import { useState } from 'react';

const ClickAndScramble = () => {
  // Array of local image paths
  const images = [
    '/assets/img1r.jpg',
    '/assets/img1f.jpg',
    '/assets/img2f.jpg',
    '/assets/img3f.jpg', 
    '/assets/img1f.jpg',
    '/assets/img2f.jpg',
    '/assets/img3f.jpg',
    '/assets/img2r.jpg', 
    '/assets/img3r.jpg',
  ];

  // State to hold the currently displayed images
  const [rndFirstImg, setRndFirstImg] = useState(images[0]);
  const [rndSecondImg, setRndSecondImg] = useState(images[1]);
  const [count, setCount] = useState(0)
  
  // Function to handle image click and set a new random image
  const handleImageClick = (imgSrc) => {
    if (imgSrc.includes('r')) {
      setCount(prevCount => prevCount + 1)
    }
  };

  // Function to update images when clicked
  const updateImages = () => {
    const rndNum1 = Math.floor(Math.random() * images.length);
    const rndNum2 = Math.floor(Math.random() * images.length);
    setRndFirstImg(images[rndNum1]);
    setRndSecondImg(images[rndNum2]);
  };

return (
<>
<h1>Score:{count}</h1>
  <div className="img-flex">
    <img src={rndFirstImg} alt="random" onClick={() => { handleImageClick(rndFirstImg); updateImages(); }} />
    <img src={rndSecondImg} alt="random" onClick={() => { handleImageClick(rndSecondImg); updateImages(); }} />
  </div>
</>
  );
};

export default ClickAndScramble;


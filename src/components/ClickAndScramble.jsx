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

  const [rndFirstImg, setRndFirstImg] = useState(images[0]);
  const [rndSecondImg, setRndSecondImg] = useState(images[1]);
  const [count, setCount] = useState(0)
  
  // imgSrc from rndFirstImg or rndSecondImg
  const handleImageClick = (imgSrc) => {
    if (imgSrc.includes('r')) {
      setCount(prevCount => prevCount + 1)
    }
  };

  // Function to update images when clicked
  const updateImages = () => {
  let rndNum1, rndNum2;
  
  // Loop until an img with 'r' is found
  do {
    rndNum1 = Math.floor(Math.random() * images.length);
  } while (!images[rndNum1].includes('r'));

  // Loop until an img with 'f' is found
  do {
    rndNum2 = Math.floor(Math.random() * images.length);
  } while (!images[rndNum2].includes('f'));

  if (Math.random() > 0.5) {
    // Swap positions
    [rndNum1, rndNum2] = [rndNum2, rndNum1];
  }

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


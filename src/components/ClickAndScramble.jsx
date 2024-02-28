import { useState } from 'react';
import Score from './Score';
import CoinPopup from './ConfettiPopup';

const ClickAndScramble = () => {
  // Array of local image paths
  const images = [
    'assets/img1r.png',
    'assets/img2r.png',
    'assets/img3r.png',
    'assets/img4r.png',
    'assets/img5r.png',
    'assets/img6r.png',
    'assets/img7r.png',
    'assets/imgXr.jpg',
    'assets/imgX2r.jpg',
    'assets/img1f.jpg',
    'assets/img2f.jpg',
    'assets/img3f.jpg',
    'assets/img4f.jpg',
    'assets/img5f.jpg'
  ];

  const [rndFirstImg, setRndFirstImg] = useState(images[0]);
  const [rndSecondImg, setRndSecondImg] = useState(images.slice(-1));
  const [count, setCount] = useState(0)

  // imgSrc from rndFirstImg or rndSecondImg
  const handleImageClick = (imgSrc) => {
    if (imgSrc.includes('r')) {
      setCount(prevCount => prevCount + 1)
    }
  };

  // Function to update images when clicked
  const updateImages = () => {

    // Create an index for images containing 'r' and 'f'
    const rIndex = [];
    const fIndex = [];

    for (let i = 0; i < images.length; i++) {
      if (images[i].includes('r')) {
        rIndex.push(i);
      }
      if (images[i].includes('f')) {
        fIndex.push(i);
      }
    }

    // Randomly select from the pre-made index
    let rndNum1 = rIndex[Math.floor(Math.random() * rIndex.length)];
    let rndNum2 = fIndex[Math.floor(Math.random() * fIndex.length)];

      if (Math.random() > 0.5) {
        // Swap positions
        [rndNum1, rndNum2] = [rndNum2, rndNum1];
      }

      setRndFirstImg(images[rndNum1]);
      setRndSecondImg(images[rndNum2]);
    };

return (
<>
<Score scoreNum={count} />
<CoinPopup confettiNum={count} />
  <div className="img-flex">
    <img src={rndFirstImg} alt="random" onClick={() => { handleImageClick(rndFirstImg); updateImages(); }} />
    <img src={rndSecondImg} alt="random" onClick={() => { handleImageClick(rndSecondImg); updateImages(); }} />
  </div>
</>
  );
};

export default ClickAndScramble;


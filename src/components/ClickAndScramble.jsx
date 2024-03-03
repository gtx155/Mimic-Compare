import { useState } from 'react';
import Score from './Score';
import CoinPopup from './ConfettiPopup';

const ClickAndScramble = () => {
  // Array of local image paths
  const images = [
    'assets/pic_1f.png',
    'assets/pic_2f.png',
    'assets/pic_3f.png',
    'assets/pic_4f.png',
    'assets/pic_5f.png',
    'assets/pic_6f.png',
    'assets/pic_7f.png',
    'assets/pic_8f.png',
    'assets/pic_9f.png',
    'assets/pic_10f.png',
    'assets/pic_11f.png',
    'assets/pic_12f.png',

    'assets/pic_1r.jpg',
    'assets/pic_2r.jpg',
    'assets/pic_3r.jpg',
    'assets/pic_4r.jpg',
    'assets/pic_5r.jpg',
    'assets/pic_6r.jpg',
    'assets/pic_7r.jpg',
    'assets/pic_8r.jpg'
  ];

  const [rndFirstImg, setRndFirstImg] = useState(images[0]);
  const [rndSecondImg, setRndSecondImg] = useState(images[17]);
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


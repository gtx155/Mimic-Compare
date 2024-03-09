import { useState } from 'react';
import Score from './Score';
import ConfettiPopup from './ConfettiPopup';
import Gameover from './Gameover'

const cooldownTime = 1 * 60 * 1000; // 1 minute in milliseconds

const ClickAndScramble = () => {
  //Real Pics
  const firstImages  = [
    'assets/pic_1r.jpg',
    'assets/pic_2r.jpg',
    'assets/pic_3r.jpg',
    'assets/pic_4r.jpg',
    'assets/pic_5r.jpg',
    'assets/pic_6r.jpg',
    'assets/pic_7r.jpg',
    'assets/pic_8r.jpg',
    'assets/pic_9r.jpg',
    'assets/pic_10r.jpg',
    'assets/pic_11r.jpg',
    'assets/pic_12r.jpg',
    'assets/pic_13r.jpg',
    'assets/pic_14r.jpg',
    'assets/pic_15r.jpg'
  ];

  //Fake Pics
  const secondImages  = [    
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
    'assets/pic_13f.png',
    'assets/pic_14f.png',
    'assets/pic_15f.png'
  ]

  const [lastShownTimes, setLastShownTimes] = useState({});
  const [rndFirstImg, setRndFirstImg] = useState(firstImages[1]);
  const [rndSecondImg, setRndSecondImg] = useState(secondImages[2]);

  const [count, setCount] = useState(0)
  const [strike, setStrike] = useState(0)

    // Function to update image for the user
    const updateImages = (isFirstImage) => {


      let availableFirstImages = firstImages.filter(image => {
          const lastShownTime = lastShownTimes[image];
          if (!lastShownTime) return true; // Image hasn't been shown yet
          const currentTime = new Date().getTime();
          return currentTime - lastShownTime >= cooldownTime; // Check cooldown time
      });

      let availableSecondImages = secondImages.filter(image => {
          const lastShownTime = lastShownTimes[image];
          if (!lastShownTime) return true; // Image hasn't been shown yet
          const currentTime = new Date().getTime();
          return currentTime - lastShownTime >= cooldownTime; // Check cooldown time
      });

      if (availableFirstImages.length === 0 || availableSecondImages.length === 0) {
          // Reset cooldown for all images if not enough available
          const resetLastShownTimes = {};
          firstImages.forEach(image => resetLastShownTimes[image] = 0);
          secondImages.forEach(image => resetLastShownTimes[image] = 0);
          setLastShownTimes(resetLastShownTimes);
          availableFirstImages = firstImages;
          availableSecondImages = secondImages;
      }

      const rndNum1 = Math.floor(Math.random() * availableFirstImages.length);
      const rndNum2 = Math.floor(Math.random() * availableSecondImages.length);


      setRndFirstImg(availableFirstImages[rndNum1]);
      setRndSecondImg(availableSecondImages[rndNum2]);

      // Update last shown times for chosen images
      const updatedLastShownTimes = { ...lastShownTimes };
      updatedLastShownTimes[availableFirstImages[rndNum1]] = new Date().getTime();
      updatedLastShownTimes[availableSecondImages[rndNum2]] = new Date().getTime();
      setLastShownTimes(updatedLastShownTimes);

      // Update count and strike based on the clicked image
      if (isFirstImage) {
          setCount(count + 1);
      } else {
          setStrike(strike + 1);
      }
  };

return (
<>
<Gameover scoreNum={count} strikeNum={strike} />
<Score scoreNum={count} strikeNum={strike} />
<ConfettiPopup confettiNum={count} />

<div className="img-flex">
  {Math.random() > 0.5 ? (
    <>
      {rndFirstImg && <img src={rndFirstImg} alt="First Image" onClick={() => updateImages(true)} />}
      {rndSecondImg && <img src={rndSecondImg} alt="Second Image" onClick={() => updateImages(false)} />}
    </>
    ) : (
    <>
      {rndSecondImg && <img src={rndSecondImg} alt="Second Image" onClick={() => updateImages(false)} />}
      {rndFirstImg && <img src={rndFirstImg} alt="First Image" onClick={() => updateImages(true)} />}
    </>
    )}
</div>
        
</>
  );
};

export default ClickAndScramble;


import { useState, useEffect } from 'react';
import '../components/CoinPopup.css'

const CoinPopup = ({ coinNum }) => {
  const [showCoin, setShowCoin] = useState(false); // Initialize showCoin state to false

  // Function to get the image URL based on the coin type
  const getCoinImage = () => {
    // Assuming your coin images are named like 'coin10.png', 'coin20.png', etc.
    return `assets/coin${coinNum}.png`; // Adjust the naming convention as needed
  };

  // Check if coinNum is a multiple of 10 and set showCoin accordingly
  useEffect(() => {
    // Use a switch statement to determine whether to show the coin
    switch (coinNum) {
      case 10:
      case 20:
      case 30:
        setShowCoin(true);
        setTimeout(() => setShowCoin(false), 3000);
        break;
      default:
        setShowCoin(false);
    }
  }, [coinNum]); // Re-run the effect whenever coinNum prop changes

  return (
    <div className="coin-container">
      {/* Conditional rendering based on the value of showCoin */}
      {showCoin && <img height="250px" src={getCoinImage()} alt="Coin" className="coin-img" />}
    </div>
  );
};

export default CoinPopup;

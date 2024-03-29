import { useEffect } from 'react';

const ConfettiPopup = ({ confettiNum }) => {
  //Sound effect when score is reached
  let cheer = new Audio('assets/Confetti_Sound.m4a');
  cheer.volume = 0.75;

  useEffect(() => {
    // Use a switch statement to determine whether to show the confetti
    switch (confettiNum) {
      case 10:
      case 20:
      case 30:
      case 40:
      case 50:
        confetti({
          particleCount: 100,
          scalar: 1.2, 
          spread: 70,
          origin: { y: 0.6 }});

          cheer.play();
        break;
      default:
    }
  }, [confettiNum]); // Re-run the effect whenever confettiNum prop changes
};

export default ConfettiPopup;

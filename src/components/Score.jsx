import { useEffect } from "react";

function Score(props) {
        let lose = new Audio('assets/Strike_Sound.mp3');
        lose.volume = 0.75;
      
        useEffect(() => {
          // Play lose sound at strike 3
          switch (props.strikeNum) {
            case 3:
                lose.play();
              break;
            default:
          }
        }, [props.strikeNum]); // Re-run the effect whenever strikeNum prop changes
return (
    <>
    <p>Score:{props.scoreNum}</p>
    <p>
        {/* Add one '✘' for each pic_xf clicked */}
        {Array.from({ length: props.strikeNum }, (_, index) => (
        <span key={index}>✘</span>
        ))}
    </p>
    </>
)
}

export default Score
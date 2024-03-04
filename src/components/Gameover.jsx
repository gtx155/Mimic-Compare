import React, { useState, useEffect } from 'react';
import './Gameover.css'

function Gameover(props) {
    const [endGame, setEndGame] = useState(false);

    useEffect(() => {
        if (props.strikeNum === 3) {
            setEndGame(true);
        }
    }, [props.strikeNum]);

    function playAgain() {
        window.location.reload();
    };

    return (
        <>
            {endGame && 
            <dialog open={true}>
                <p>GAME OVER!</p>
                <p>Score:{props.scoreNum}</p>
                <button onClick={playAgain}>PLAY AGAIN?</button>
            </dialog>}
        </>
    );
}

export default Gameover;

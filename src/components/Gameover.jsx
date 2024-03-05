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
                <h1>GAME OVER!</h1>
                <h1 className='score'>Score:{props.scoreNum}</h1>
                <button onClick={playAgain}>PLAY AGAIN?</button>
            </dialog>}
        </>
    );
}

export default Gameover;

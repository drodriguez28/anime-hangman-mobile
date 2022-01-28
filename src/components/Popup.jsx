import React, { useEffect } from 'react';
import { checkWin } from '../helper/helpers';

const Popup = ({ correctLetters, wrongLetters, selectedWords, setPlayable }) => {

    let finalMessage = '';
    let finalMessageRevealWord = '';
    let playable = true;


    if (checkWin(correctLetters, wrongLetters, selectedWords) === 'win') {
        finalMessage = 'Congratulations! You won! 😃 ';
        playable = false;
    } else if (checkWin(correctLetters, wrongLetters, selectedWords) === 'lose') {
        finalMessage = 'Unfortunately you lost. 😕';
        finalMessageRevealWord = `...the word was: ${selectedWords}`;
        playable = false;
    }


    useEffect(() => setPlayable(playable));

    return (
        <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
            <div className="popup">
                <h2> {finalMessage}</h2>
                <h3>{finalMessageRevealWord}</h3>
                <button id="play-button">Play Again</button>
            </div>
        </div>
    )
};

export default Popup;
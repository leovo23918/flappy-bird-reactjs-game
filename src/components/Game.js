import React from 'react';
import Bird from './Bird';
import Pipe from './Pipe';
import Foreground from './Foreground';

const Game = () => {
    return(
        <div style={{
            position: 'relative',
            width: 300,
            height: 500,
            backgroundColor: 'pink',
        }}>
            <Bird/>
            <Pipe/>
            <Foreground/>
        </div>
    )
}

export default Game;
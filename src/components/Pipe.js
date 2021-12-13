import React from 'react';
import BotPipeImage from '../images/pipe-bottom.png';
import TopPipeImage from '../images/pipe-top.png';

const Pipe = ()=>{
    return(
        <div>
            <div style={{ 
                position: 'absolute',
                top: 0,
                left: 150,
                width: 50,
                height: 200,
                background: `url(${TopPipeImage})`,
                backgroundPosition: 'bottom',
            }}>

            </div>
            <div style={{ 
                position: 'absolute',
                left: 150,
                top: 300, //cot tren 200 cong khoang giua 100 la 300
                width: 50,
                height: 200,
                background: `url(${BotPipeImage})`,
            }}>

            </div>
        </div>
    )
}

export default Pipe;
import React from 'react';

const PopUp = ({popUpShow}) => {
    return (
        <div className='popUp' style={{display:popUpShow?'flex':'none'}}>
            <form action="">
                <h1>Данная недвижемость продается!</h1>
                <p className='streetName'>Ул. Огарева</p>
                <p className='streetPrice'>200</p>
                <div className='popUpBtn'>
                <button>Купить</button>
                <button>Отказаться</button>
                </div>
            </form>
        </div>
    );
};

export default PopUp;
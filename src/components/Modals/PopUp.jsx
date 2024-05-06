import React from 'react';

const PopUp = ({cardPopUpShow, streetName, price, buyCard, deniedCard, chance, chest}) => {
    
    return (
        <div className='popUp' style={{display:cardPopUpShow?'flex':'none'}}>
            <form action="">
                <h1>Данная недвижемость продается!</h1>
                <p className='streetName'>{streetName}</p>
                <p className='streetPrice'>Цена карточки: {price}</p>
                <div className='popUpBtn'>
                <button type='button' onClick={() => buyCard()}>Купить</button>
                <button type='button' onClick={() => deniedCard()}>Отказаться</button>
                </div>
            </form>
        </div>
    );
};

export default PopUp;
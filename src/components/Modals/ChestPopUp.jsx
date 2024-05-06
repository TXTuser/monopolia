import React from 'react';
import { useEffect, useState } from "react";

const ChestPopUp = ({}) => {
    const [chances, setChances] = useState([
        "Перейдите на поле вперед и получите 200 монет.", 
        "Перейдите на ближайшую ЖД. Если она не занята - вы можете ее купить.",
        "Перейдиет на улицу Арбат.",
        "Перейдите на ближайшее предприятие. Если оно не занято - вы можете его купить.",
    ])
    return (
        <div className='popUp'>
            <form action="">
                <h1>Шанс!</h1>
                <h3></h3>
                <div className="chances">
                {chances.map((el)=>
                    <div className="chance"><p>{el}</p></div>
                )}
                </div>
            </form>
        </div>
    );
};

export default ChestPopUp;
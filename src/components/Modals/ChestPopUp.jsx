import React from "react";
import { useEffect, useState } from "react";

const ChestPopUp = ({closeChestPopUp  }) => {
  const [chests, setChests] = useState([
    "Перейдите на поле вперед и получите 200 монет.",
    "Перейдите на ближайшую ЖД. Если она не занята - вы можете ее купить.",
    "Перейдиет на улицу Арбат.",
    "Перейдите на ближайшее предприятие. Если оно не занято - вы можете его купить.",
  ]);
  const [swapCardId, setSwapCardId] = useState(null);
  const [swapCardColor, setSwapCardColor] = useState(null);

  function swapCard(id) {
    // console.log("work!");
    setSwapCardId(id);
    setTimeout(() => {
      setSwapCardId(null);
      setSwapCardColor(id);
    }, 500);
  }

  return (
    <div className="popUp">
      <form action="">
        <h1>Общественная казна!</h1>
        <h3></h3>
        <div className="chests">
          {chests.map((el, id) => (
            <div
              className={
                "chest " +
                (swapCardId === id ? "swap-card-style " : "") +
                (swapCardColor === id ? "swap-card-style-color " : "") +
                (swapCardColor === null ? "" : "swap-card-style-pointer")
              }
              onClick={() => swapCard(id)}
            >
              <p>{el}</p>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => closeChestPopUp()}
          className={swapCardColor != null ? "" : "swap-card-style-pointer"}
        >
          OK
        </button>
      </form>
    </div>
  );
};

export default ChestPopUp;

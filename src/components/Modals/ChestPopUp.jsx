import React from "react";
import { useEffect, useState } from "react";
import { chanceDB, chestDB } from "../../db";
// import { cardsDB, usersDB, chestDB, chanceDB } from "src/db.js";

const ChestPopUp = ({ closeChestPopUp, chests }) => {
  // const [chests, setChests] = useState(chestDB.sort(()=> Math.random() - 0.5).splice(8, chestDB.length-1));
  const [chest, setChest] = useState(null)
  // const [chests, setChests] = useState(chestDB);
  const [chance, setChance] = useState(chanceDB);
  const [swapCardId, setSwapCardId] = useState();
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
              <p>{el.title}</p>
            </div>
          ))}
        </div>
        <div className="button-block">
          <button
            type="button"
            onClick={() => closeChestPopUp(swapCardColor)}
            className={swapCardColor != null ? "" : "swap-card-style-pointer"}
          >
            OK
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChestPopUp;

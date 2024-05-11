// @ts-ignore
import PopUp from "./components/Modals/PopUp";
import ChestPopUp from "./components/Modals/ChestPopUp";

import map from "./img/map.svg";
import cat from "./img/blackcat.png";
import dice1 from "./img/dice1.png";
import dice2 from "./img/dice2.png";
import dice3 from "./img/dice3.png";
import dice4 from "./img/dice4.png";
import dice5 from "./img/dice5.png";
import dice6 from "./img/dice6.png";
import "./App.css";
// @ts-ignore
import { cardsDB, usersDB } from "./db";
import { useEffect, useState } from "react";

function App() {
  const [cards, setCards] = useState(cardsDB);
  const [users, setUsers] = useState(usersDB);
  const [steps, setSteps] = useState(Math.floor(Math.random() * 1 + 2));
  const [currentSteps, setCurrentSteps] = useState(steps);
  const [stepsRight, setStepsRight] = useState(0);
  const [stepsBottom, setStepsBottom] = useState(0);
  const [numDice, setNumDice] = useState(10);
  const [cardPopUpShow, setCardPopUpShow] = useState(false);
  const [chestPopUpShow, setChestPopUpShow] = useState(false);
  const [dices, setDices] = useState([
    Math.floor(Math.random() * 6),
    Math.floor(Math.random() * 6),
  ]);
  const [diceImages, setDiceImages] = useState([
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
  ]);
  useEffect(() => {
    if (currentSteps != steps) {
      setTimeout(() => {
        setSteps((s) => s + 1);
      }, 300);
    } else if (steps != 0) {
      if (cards.find((o) => o.place === steps)) {
        setCardPopUpShow(true);
      } else if (steps === 2) {
        setChestPopUpShow(true);
      }
    }
    getRight();
    getBottom();
  }, [steps, currentSteps]);
  function diceRoll() {
    let random = Math.floor(Math.random() * 6);
    let random2 = Math.floor(Math.random() * 6);
    setDices([random, random2]);
    setCurrentSteps(1);
    // setCurrentSteps(steps + random + random2 + 2);
    // let currentSteps = s + random + random2 + 2;
    if (currentSteps == steps) {
    }
    // setSteps((s) => {
    //   if(nextSteps >= 40) {
    //     nextSteps = nextSteps - 40
    //   }
    //   return nextSteps;
    // });
  }

  function getRight() {
    let right = stepsRight;
    if (steps < 11) {
      right = 11 + 8.5 * (steps - 1);
    } else if (steps < 21) {
      right = 87.5;
    } else if (steps < 31) {
      right = 11 + 8.5 * (9 - (steps - 20));
    } else if (steps < 41) {
      right = 0;
    }
    setStepsRight(right);
  }
  function getBottom() {
    let bottom = stepsBottom;
    if (steps < 11) {
      bottom = 0;
    } else if (steps < 21) {
      bottom = 11 + 8.5 * (steps - 11);
    } else if (steps < 31) {
      bottom = 87.5;
    } else if (steps < 41) {
      bottom = 11 + 8.5 * (8 - (steps - 31));
    }
    setStepsBottom(bottom);
  }

  function buyCard() {
    // popUp.style.display = "none"
    setCardPopUpShow(false);
    setCards((c) => {
      let nextCards = c;
      nextCards.find((o) => o.place === steps).buyerId = 1;
      return nextCards;
    });
  }

  function chest() {}

  function chance() {}

  function deniedCard() {
    setCardPopUpShow(false);
  }

  function closeChestPopUp() {
    setChestPopUpShow(false);
  }

  return (
    <div className="App">
      <div className="game-info">
        <ol>
          {users.map((el, index) => (
            <li>
              <a href="" className="player-name">
                {el.name}
              </a>
              <nav className="game-info-nav">
                {cards.map((c, cardIndex) =>
                  c.buyerId === el.id ? (
                    <div className="card">
                      <span className="color-card"></span>
                      <div className="card-info">
                        <h2 className="city">{c.name}</h2>
                        <h4>Рента с участка</h4>
                        <ul className="monopoly-rent">
                          <li>
                            <span>Рента при Монополии</span>
                            <span>{c.monopolyRent}</span>
                          </li>
                          <li>
                            <span>С 1 домом</span>
                            <span>{c.oneHouse}</span>
                          </li>
                          <li>
                            <span>С 2 домами</span>
                            <span>{c.twoHouse}</span>
                          </li>
                          <li>
                            <span>С 3 домами</span>
                            <span>{c.threeHouse}</span>
                          </li>
                          <li>
                            <span>С 4 домами</span>
                            <span>{c.fourHouse}</span>
                          </li>
                          <li>
                            <span>С Отелем</span>
                            <span>{c.hotel}</span>
                          </li>
                        </ul>
                        <ul className="priceforhome">
                          <li>
                            <span>Стоимость дома</span>
                            <span>{c.priceForHouse}</span>
                          </li>
                          <li>
                            <span>Стоимость отеля</span>
                            <span>{c.priceForHotel}</span>
                          </li>
                        </ul>
                        <ul></ul>
                      </div>
                    </div>
                  ) : null
                )}
              </nav>
            </li>
          ))}
        </ol>
        <p>{steps}</p>
      </div>
      <div className="container">
        <div id="dices" onClick={() => diceRoll()}>
          <img src={diceImages[dices[0]]} alt="" />
          <img src={diceImages[dices[1]]} alt="" />
        </div>
        <img src={map} alt="" className="map" />
        <img
          src={cat}
          alt=""
          className="cat"
          style={{
            right: stepsRight + "%",
            bottom: stepsBottom + "%",
          }}
        />
      </div>

      {cardPopUpShow && (
        <PopUp
          cardPopUpShow={cardPopUpShow}
          streetName={
            cards.find((o) => o.place === steps)
              ? cards.find((o) => o.place === steps).name
              : "Передите на поле вперед и получите 200 монет"
          }
          price={
            cards.find((o) => o.place === steps)
              ? cards.find((o) => o.place === steps).price
              : ""
          }
          buyCard={buyCard}
          deniedCard={deniedCard}
          chest={chest}
          chance={chance}
        ></PopUp>
      )}

      {chestPopUpShow && <ChestPopUp closeChestPopUp={closeChestPopUp}>
        
        </ChestPopUp>}
    </div>
  );
}

export default App;

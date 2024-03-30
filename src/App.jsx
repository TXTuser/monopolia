import map from "./img/map.svg";
import cat from "./img/blackcat.png";
import "./App.css";
// @ts-ignore
import { cardsDB, usersDB } from "./db";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(cardsDB);
  const [users, setUsers] = useState(usersDB);
  const [steps,setSteps] = useState(5)
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
                {el.cards.map((c, cardIndex) => (
                  <div className="card">
                    <span className="color-card"></span>
                    <div className="card-info">
                      <h2 className="city">{cards[c.id].name}</h2>
                      <h4>Рента с участка</h4>
                      <ul className="monopoly-rent">
                        <li>
                          <span>Рента при Монополии</span>
                          <span>{cards[c.id].monopolyRent}</span>
                        </li>
                        <li>
                          <span>С 1 домом</span>
                          <span>{cards[c.id].oneHouse}</span>
                        </li>
                        <li>
                          <span>С 2 домами</span>
                          <span>{cards[c.id].twoHouse}</span>
                        </li>
                        <li>
                          <span>С 3 домами</span>
                          <span>{cards[c.id].threeHouse}</span>
                        </li>
                        <li>
                          <span>С 4 домами</span>
                          <span>{cards[c.id].fourHouse}</span>
                        </li>
                        <li>
                          <span>С Отелем</span>
                          <span>{cards[c.id].hotel}</span>
                        </li>
                      </ul>
                      <ul className="priceforhome">
                        <li>
                          <span>Стоимость дома</span>
                          <span>{cards[c.id].priceForHouse}</span>
                        </li>
                        <li>
                          <span>Стоимость отеля</span>
                          <span>{cards[c.id].priceForHotel}</span>
                        </li>
                      </ul>
                      <ul></ul>
                    </div>
                  </div>
                ))}
              </nav>
            </li>
          ))}
          {/* <li>
            <a href="" className="player-name">barbie</a>
            <nav className="game-info-nav">
              <div className="card">
                <span className="color-card"></span>
                <div className="card-info">
                  <h2 className="city">Ул. Арбат</h2>
                  <h4>Рента с участка</h4>
                  <ul className="monopoly-rent">
                    <li>
                      <span>Рента при Монополии</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span>С 1 домом</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>С 2 домами</span>
                      <span>600</span>
                    </li>
                    <li>
                      <span>С 3 домами</span>
                      <span>1400</span>
                    </li>
                    <li>
                      <span>С 4 домами</span>
                      <span>1700</span>
                    </li>
                    <li>
                      <span>С Отелем</span>
                      <span>2000</span>
                    </li>
                  </ul>
                  <ul className="priceforhome">
                    <li>
                      <span>Стоимость дома</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>Стоимость отеля</span>
                      <span>200</span>
                    </li>
                  </ul>
                  <ul></ul>
                </div>
              </div>
            </nav>
          </li>
          <li>
            <a href="" className="player-name">barbie</a>
            <nav className="game-info-nav">
              <div className="card">
                <span className="color-card"></span>
                <div className="card-info">
                  <h2 className="city">adadasdasd Ул.</h2>
                  <h4>Рента с участка</h4>
                  <ul>
                    <li>
                      <span>Рента при Монополии</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span>С 1 домом</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>С 2 домами</span>
                      <span>600</span>
                    </li>
                    <li>
                      <span>С 3 домами</span>
                      <span>1400</span>
                    </li>
                    <li>
                      <span>С 4 домами</span>
                      <span>1700</span>
                    </li>
                    <li>
                      <span>С Отелем</span>
                      <span>2000</span>
                    </li>
                  </ul>
                  <ul className="priceforhome">
                    <li>
                      <span>Стоимость дома</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>Стоимость отеля</span>
                      <span>200</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="card">
                <span className="color-card"></span>
                <div className="card-info">
                  <h2 className="city">Нагатинская Ул.</h2>
                  <h4>Рента с участка</h4>
                  <ul>
                    <li>
                      <span>Рента при Монополии</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span>С 1 домом</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>С 2 домами</span>
                      <span>600</span>
                    </li>
                    <li>
                      <span>С 3 домами</span>
                      <span>1400</span>
                    </li>
                    <li>
                      <span>С 4 домами</span>
                      <span>1700</span>
                    </li>
                    <li>
                      <span>С Отелем</span>
                      <span>2000</span>
                    </li>
                  </ul>
                  <ul className="priceforhome">
                    <li>
                      <span>Стоимость дома</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>Стоимость отеля</span>
                      <span>200</span>
                    </li>
                  </ul>
                  <ul></ul>
                </div>
              </div>

              <div className="card">
                <span className="color-card"></span>
                <div className="card-info">
                  <h2 className="city">Житная Ул.</h2>
                  <h4>Рента с участка</h4>
                  <ul>
                    <li>
                      <span>Рента при Монополии</span>
                      <span>100</span>
                    </li>
                    <li>
                      <span>С 1 домом</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>С 2 домами</span>
                      <span>600</span>
                    </li>
                    <li>
                      <span>С 3 домами</span>
                      <span>1400</span>
                    </li>
                    <li>
                      <span>С 4 домами</span>
                      <span>1700</span>
                    </li>
                    <li>
                      <span>С Отелем</span>
                      <span>2000</span>
                    </li>
                  </ul>
                  <ul className="priceforhome">
                    <li>
                      <span>Стоимость дома</span>
                      <span>200</span>
                    </li>
                    <li>
                      <span>Стоимость отеля</span>
                      <span>200</span>
                    </li>
                  </ul>
                  <ul></ul>
                </div>
              </div>
            </nav>
          </li> */}
        </ol>
      </div>
      <div className="container">
        <img src={map} alt="" className="map" />
        <img src={cat} alt="" className="cat" style={{
          right:"%", /*11 - с большой на маленький///8.5 - с маленькой на маленькую */
        }}/>
      </div>
    </div>
  );
}

export default App;

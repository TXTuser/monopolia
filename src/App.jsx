import map from "./img/map.svg";
import cat from "./img/blackcat.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="game-info">
        <ol>
          <li>
            <a href="">barbie</a>
            <nav className="game-info-nav">
              <div className="card">
                <span className="color-card"></span>
                <div className="card-info">
                  <h2 className="city">Ул. Арбат</h2>
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
                  <ul>
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
            <a href="">barbie</a>
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
                  <ul>
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
                  <ul>
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
                  <ul>
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
        </ol>
      </div>
      <div className="container">
        <img src={map} alt="" className="map" />
        <img src={cat} alt="" className="cat" />
      </div>
    </div>
  );
}

export default App;

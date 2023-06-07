import Card from "./components/Card";
import cardsData from "./components/cardsData";

function App() {
  
  return (
    <div className="App">
      <div className="container">
        <div className="header-logo">
          <img src="./img/airbnb.svg" alt="airbnb" />
        </div>

        <div className="gallery">
          <div className="gallery-column col-1">
            <img src="./img/cooking.svg" alt="" />
          </div>

          <div className="gallery-column col-2">
            <img src="./img/cake.svg" alt="" />
            <img src="./img/dance.svg" alt="" />
          </div>

          <div className="gallery-column col-3">
            <img src="./img/spice.svg" alt="" />
            <img src="./img/guitar.svg" alt="" />
          </div>

          <div className="gallery-column col-4">
            <img src="./img/microphone.svg" alt="" />
            <img src="./img/swim.svg" alt="" />
          </div>

          <div className="gallery-column col-5">
            <img src="./img/yoga.svg" alt="" />
            <img src="./img/sing.svg" alt="" />
          </div>
        </div>

        <h1>Online Experiences</h1>
        <p className="subtitle">
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>

        <div className="cards">
          {cardsData.map(card => <Card {...card}/>)}
        </div>
      </div>
    </div>
  );
}

export default App;

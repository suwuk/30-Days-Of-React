import React from "react";
import ReactDOM from "react-dom/client";

// Header Component
const Header = () => {
  return (
    <header>
      <h1>30 Days of React</h1>
      <h3>Number Generator</h3>
    </header>
  );
};



// Number Generator Component
const NumGenerator = (props) => {
  let list = props.angka.map((ang) => (
    <div className="card" key={ang}>
      {props.getAngka(ang)}
    </div>
  ));
  return list;
};

const hexaColor = () => {
  const hex = "0123456789abcdef";
  let color = "";
  for (let i = 1; i <= 6; i++) {
    let getHex = Math.floor(Math.random() * hex.length);
    color += hex[getHex];
  }
  return "#" + color;
};



// HexaColor Component
let GetColor = () => {
  let color = [];
  for (let c = 1; c <= 16; c++) {
    color.push(hexaColor());
  }
  return color.map(() => (
    <div
      className="card color"
      style={{ backgroundColor: hexaColor() }}
      key={hexaColor()}
    >
      {hexaColor()}
    </div>
  ));
};



// Main Component
const Main = () => {
  let angka = [];

  for (let i = 0; i <= 31; i++) {
    angka.push(i);
  }

  let getAngka = function (angk) {
    let pembagi = 0;
    for (let j = 1; j <= angk; j++) {
      if (angk % j === 0) {
        pembagi++;
      }
    }

    if (pembagi === 2) {
      return <div className="prima">{angk}</div>;
    } else if (angk % 2 === 0) {
      return <div className="genap">{angk}</div>;
    } else if (angk % 2 === 1) {
      return <div className="ganjil">{angk}</div>;
    }
  };

  return (
    <main>
      <div className="number-generator grid">
        <NumGenerator angka={angka} getAngka={getAngka} />
      </div>

      <h1 className="title-ch">HexaColor</h1>
      <div className="color-hex grid">
        <GetColor />
      </div>
    </main>
  );
};



// App Component
const App = () => {
  return (
    <div className="layer-bg">
      <Header />
      <Main />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

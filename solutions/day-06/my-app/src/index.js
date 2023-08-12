import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {return (
  <header>
    <h1>30 Days of React</h1>
    <h3>Number Generator</h3>
  </header>
)
};

// countries component
const Oke = (props) => {
  let list = props.angka.map((ang) => <div className="card">{props.getAngka(ang)}</div>);
  return list;
};

// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ))
//   return <div>{countryList}</div>
// }

const Main = () => {
  let angka = [];

  for(let i= 0;i<=31;i++){
    angka.push(i)
  }

  let getAngka = function(angk){
    let pembagi = 0;
    for (let j = 1; j <=  angk ; j++) {
      if ( angk  % j === 0) {
        pembagi++;
      }
    }
    
    if (pembagi === 2) {
      return <div className="prima">{angk}</div>;
    } else if ( angk  % 2 === 0) {
      return <div className="genap">{angk}</div>;
    } else if ( angk  % 2 === 1) {
      return <div className="ganjil">{angk}</div>;
    } 
  }

  return (
    <main>
      <Oke angka={angka} getAngka={getAngka}/>
    </main>
  )
};

const App = () => {
  return (
    <div className="layer-bg">
      <Header />
      <Main />
    </div>
  )

};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

import React from 'react'
import Header from './component/header/Header';


function darkMode() {
  let element = document.body;
  element.classList.toggle("dark-mode");
}

const App = () => {
  const data = {
    welcome: '30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
    },
    date: 'Oct 9, 2020',
  }

  return (

    <>
    <h1>Welcome to 30 Days Of React</h1>
    <Header data={data}/>
    <button onClick={darkMode}>Dark Mode</button>
    </>
  )
  }


export default App;

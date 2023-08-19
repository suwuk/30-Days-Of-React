import React from 'react';
import ReactDOM from 'react-dom/client';


function Input ({type,plh}){
  return (
    <input type={type} placeholder={plh} />
  )
}

function handleInput (ComParam, plh){
  return (props) => {
    return <ComParam {...props} plh={plh} />
  }
}

const NewInput = handleInput(Input,'Masukan Nama depan')


const App = () => {
  return (
    <>
      <NewInput type="text"/>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


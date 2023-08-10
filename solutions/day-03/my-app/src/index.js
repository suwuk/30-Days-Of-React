import React from "react";
import ReactDOM from "react-dom/client";
import mountainImage from './images/mountain.jpg'
import {htmlImg,cssImage,jsImg,ciImg,tailwindImg,centangBiru} from './icon.js'

const header = (
  <header>
    <h1>Diaz Aditya Yudha</h1>
  </header>
);

const userImage = (
    <img src={mountainImage} alt="MountainImage" />
)

const skills = ['HTMLL','CSS','JS','React','Python','PHP','CodeIgniter','MySQL','Database','Git']
const newSkills = skills.map((skill) => <div className="card">{skill}</div>)

const main = (
  <main> 
    <div id="FET">
      <h3>Front End Technologies</h3>
      <div className="frontend">
        {htmlImg}{cssImage}{jsImg}{ciImg}{tailwindImg}
      </div>
    </div>

    <div id="subcribe">
      <h1>Subcribe</h1>
      <p>Sign up with your email address to receive news and updates</p>
      <form>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <input type="text" placeholder="Email"/>
      </form>
      <button>Subcribe</button>
    </div>

    <div id="Profile">
      <div className="profileIcon">       
        {userImage}
      </div>
      <div className="nameProfile">        
        <h3>Diaz Aditya Yudha</h3>
        {centangBiru}
      </div>
      <p>Junior Developer</p>
      <h2>SKILLS</h2>
      <div className="listCard">
        {newSkills}
      </div>
      

    </div>
  </main>
);


const app = (
  <div>
    {header}
    {main}  
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(app);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

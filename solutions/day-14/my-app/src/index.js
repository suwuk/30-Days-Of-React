import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialTwitterCircular,
} from 'react-icons/ti'


class App extends React.Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      day: 1,
      congratulate: '',
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    //The shouldComponentUpdate() built-in life cycle method should return a boolean. If this method does not return true the application will not update.
    //If the method does not return true the application will never update. 
    console.log(nextProps, nextState)
    console.log(nextState.day)
    if (nextState.day > 30) {
      return false
    } else {
      return true
    }
  }

  doChallenge = () => {
    this.setState({
      day: this.state.day + 1,
    })
  }
  componentDidUpdate(prevProps, prevState) { // It is called after the component is updated in the DOM.
    if (prevState.day === 29) {
      this.setState({
        congratulate: 'Congratulations,Challenge has been completed',
      })
    }
    console.log(prevState, prevProps)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h1>Calling API</h1>
        <button onClick={this.doChallenge}>Do Challenge</button>
        <p>Challenge: Day {this.state.day}</p>
        <h2>{this.state.congratulate}</h2>
        <div>
          <TiSocialLinkedinCircular />
          <TiSocialGithubCircular />
          <TiSocialTwitterCircular />
        </div>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App /> 
 
);


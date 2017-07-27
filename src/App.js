import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import EulerButton from './components/eulerButton';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedButtonId: "1",
    };
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler(id) {
    this.setState({selectedButtonId: id})
  }

  render() {
    const buttonIds = ["1", "2", "3", "4", "5", "6"];

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h2>Welcome to Haskellator</h2>
        </div>
        <div className="App-body">
          <div className="left">
            {buttonIds.map(id => <EulerButton eulerId={id}
                                              key={id}
                                         selectedButtonId={this.state.selectedButtonId}
                                         clickHandler={this.buttonClickHandler}/>)}
          </div>
          <div className="right">
            I am empty at the moment
          </div>
        </div>
      </div>
    );
  }
}

export default App;


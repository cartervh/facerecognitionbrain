import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './component/Navigation/Navigation'
class App extends Component {
  render() {
    return (
      <div className="App">
      	<Navigation />
      	{
      		/*<Logo />
			<ImageLinkForm />
			<FaceRecognition />*/
      	}
      </div>
    );
  }
}

export default App;
import { Component } from 'react';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
    };
  }

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === 'home' ? (
          <Home onRouteChange={this.onRouteChange} />
        ) : this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} />
        ) : (
          <Register onRouteChange={this.onRouteChange} />
        )}
      </div>
    );
  }
}

export default App;

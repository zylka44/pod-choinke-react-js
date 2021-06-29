import { Component } from 'react';
import './App.css';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'signin',
    };
  }

  onRouteChange() {
    this.setState({ route: 'home' });
  }

  render() {
    return (
      <div className="App">
        {this.state.route === 'signin' ? <Signin onRouteChange={this.onRouteChange} /> : <Register />}
      </div>
    );
  }
}

export default App;

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
      user: {
        id: '',
        name: '',
        email: '',
        joined: '',
      },
    };
  }

  loadeUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        joined: data.joined,
      },
    });
  };

  onRouteChange = (route) => {
    this.setState({ route: route });
  };

  render() {
    return (
      <div className="App">
        {this.state.route === 'home' ? (
          <Home onRouteChange={this.onRouteChange} user={this.state.user} />
        ) : this.state.route === 'signin' ? (
          <Signin onRouteChange={this.onRouteChange} loadeUser={this.loadeUser} />
        ) : (
          <Register onRouteChange={this.onRouteChange} loadeUser={this.loadeUser} />
        )}
      </div>
    );
  }
}

export default App;

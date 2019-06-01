import React from 'react';
import { hot } from 'react-hot-loader';
import Routes from './Routes';

class App extends React.Component {
  state = {
    index: 1,
  };

  handleClick = () => {
    alert(this.state.index)
    const { index } = this.state;
    this.setState({
      index: index + 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>haha</button>
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);

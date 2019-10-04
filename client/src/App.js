import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      players: []
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/api/players")
    .then(res => {
      this.setState({players: res.data})
    })
    .catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div>
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}

export default App;

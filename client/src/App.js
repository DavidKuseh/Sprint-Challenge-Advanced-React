import React from 'react';
import './App.scss';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import DarkMode from './components/DarkModebtn';

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
        <DarkMode />
        <PlayerList players={this.state.players}/>
      </div>
    )
  }
}

export default App;

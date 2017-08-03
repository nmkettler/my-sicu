import React, { Component } from 'react';
import { render } from 'react-dom';

class Games extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        };
    }

    componentDidMount() {
        const data = [
            {
                id: 1,
                name: 'Game 1',
                year: 'Created 2016'
            },
            {
                id: 2,
                name: 'Game 2',
                year: 'Created 2017'
            },
            {
                id: 3,
                name: 'Game 3',
                year: 'Created 2016'
            },

        ];

        this.setState({games: data});
    }

  render() {

    const gameNode = this.state.games.map((game) => {
        return (
            <a
                href="#"
                className="list-group-item"
                key={game.id}>
                {game.name}
            </a>
        )
    });
    return (
      <div className="games">
        <h1>Game Page</h1>
        <div className="list-group">
            {gameNode}
        </div>
      </div>
    );
  }
}

export default Games;
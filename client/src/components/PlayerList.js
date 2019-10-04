import React from 'react';
import PlayerCard from './PlayerCard';

const PlayerList = (props) => {
    const { players } = props;
    return (
        <div>
            { players.map(person => <PlayerCard key={person.id} player={person}/>)}
        </div>
    )
}

export default PlayerList;
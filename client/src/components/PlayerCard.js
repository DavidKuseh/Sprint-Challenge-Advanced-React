import React from 'react';

const PlayerCard = props => {
    return (
        <div>
            <h2>{props.player.name}</h2>
            <p>{props.player.country}</p>
            <p>{props.player.searches}</p>
            <p>{props.player.id}</p>
        </div>
    )
}

export default PlayerCard;
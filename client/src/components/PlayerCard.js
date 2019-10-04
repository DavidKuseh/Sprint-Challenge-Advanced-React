import React from 'react';
import styled from 'styled-components';

const Player = styled.div`
    background-color: #347FC4;
    width: 230px;
    margin: 60px;
    padding: 15px;
    border-radius: 20px;
`

const PlayerCard = props => {
    return (
        <Player>
            <h2>{props.player.name}</h2>
            <p>Country: {props.player.country}</p>
            <p>Search hits: {props.player.searches}</p>
        </Player>
    )
}

export default PlayerCard;
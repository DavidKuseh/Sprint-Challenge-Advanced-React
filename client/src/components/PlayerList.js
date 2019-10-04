import React from 'react';
import PlayerCard from './PlayerCard';
import styled from 'styled-components';

const Players = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
`


const PlayerList = (props) => {
    const { players } = props;
    return (
        <Players>
            { players.map(person => <PlayerCard key={person.id} player={person}/>)}
        </Players>
    )
}

export default PlayerList;
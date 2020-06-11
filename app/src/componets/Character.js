import React from 'react'

const Character = props => {

    return(
        <div>
            <img alt='character' src={props.character.image}></img>
            <h2>{props.character.name}</h2>
            <h3>{props.character.status}</h3>
            
        </div>
    )
}

export default Character
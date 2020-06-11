import React from 'react'
import {
    Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button
  } from 'reactstrap';

import { connect } from 'react-redux'

import { saveCharacter } from '../actions/saveCharacterAction.js'


const Character = props => {


    return(
       
        <Card inverse style={{ backgroundColor: '#333', 
        borderColor: '#333', borderRadius: '25px', 
        margin: '20px', padding: '20px', fontFamily: 'Courier New', width: '20rem'}}>

            <CardImg inverse style = {{borderRadius: '25px'}}
            top width="100%" alt= 'character' 
            src={props.character.image} />

            <CardBody inverse style= {{color: 'white'}}>
                <CardTitle>Name: {props.character.name}</CardTitle>
                <CardSubtitle>Status: {props.character.status}</CardSubtitle>
                <CardSubtitle>Species: {props.character.species}</CardSubtitle>
                <button onClick={() => props.saveCharacter(props.character)}>Save Character</button>
            </CardBody> 
    
    </Card>

       
    )

}

export default connect (null, { saveCharacter })(Character)
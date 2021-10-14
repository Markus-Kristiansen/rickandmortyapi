import React from 'react'
import { Card } from 'react-bootstrap'
import { ICharacter } from '../interfaces/ICharacter'

const CharacterItem = ({ id, name, status, species, gender, image, origin } : ICharacter) => {
    return (
        <Card className="h-100">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Species: {species}</Card.Text>
                <Card.Text>Gender: {gender}</Card.Text>
                <Card.Text>Status: {status}</Card.Text>
                <Card.Text>Origin: {origin.name}</Card.Text>
            </Card.Body>
            <Card.Img src={image}></Card.Img>
        </Card>
    )
}

export default CharacterItem
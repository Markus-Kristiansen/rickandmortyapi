import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { RickAndMortyContext } from '../contexts/RickAndMortyContext'
import { ICharacter } from '../interfaces/ICharacter'
import { RickAndMortyContextType } from '../types/RickAndMortyContextType'
import CharacterItem from './CharacterItem'

const CharacterList = () => {

    // Here I wish to use the context created in RickAndMortyContext
    const {characters} = useContext(RickAndMortyContext) as RickAndMortyContextType

    const createCharacterList = () => {
        return characters.map((character: ICharacter, key: number) => {
            return(
                <Col xs={12} sm={6} md={4} lg={3} key={key}>
                    <CharacterItem 
                        id={character.id}
                        name={character.name}
                        species={character.species}
                        gender={character.gender}
                        status={character.status}
                        origin={character.origin}
                        image={character.image}                      
                    />
                </Col>
            )
        })
    }


    return (
        <Row>
            {createCharacterList()}
        </Row>
    )
}

export default CharacterList

import React from 'react'
import StarWarsCharacter from './StarWarsCharacter'

const StarWarsCharacterList = ({characterListProperty}) => (
        <div className='starWarsCharacterList'> 
            {characterListProperty.map(character => <StarWarsCharacter characterProperty={character} key={character.url}/> )}
        </div>
    )

export default StarWarsCharacterList
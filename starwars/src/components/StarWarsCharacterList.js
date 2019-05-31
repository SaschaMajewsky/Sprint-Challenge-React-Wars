import React from 'react'
import StarWarsCharacter from './StarWarsCharacter'

const StarWarsCharacterList = ({characterListProperty}) => (
        <div className='starWarsCharacterList'> 
            {characterListProperty.map(character => <StarWarsCharacter characterProperty={character} key={character.url}/> )}
            <div className="pagination">
                <div className="previous"></div>
                <div className="next"></div>
            </div>
        </div>

    )

export default StarWarsCharacterList
import React from 'react'
import StarWarsCharacter from './StarWarsCharacter'

const StarWarsCharacterList = ({characterListProperty, previousProperty, nextProperty}) => (
        <div className='starWarsCharacterList'> 
            {characterListProperty.map(character => <StarWarsCharacter characterProperty={character} key={character.url}/> )}
            <div className="pagination">
                <div onClick={previousProperty} className="previous"></div>
                <div onClick={nextProperty} className="next"></div>
            </div>
        </div>

    )

export default StarWarsCharacterList
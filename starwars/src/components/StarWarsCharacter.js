import React from 'react'
import './StarWars.css'

const StarWarsCharacter = ({characterProperty: {name, gender, birth_year, height}}) => (
        <div className='starWarsCharacterDetailList'>
            <div className='detail name'>{name} </div>
            <div className='detail'> <span className="description">Sex:</span> {gender === "n/a" ? "robot" : gender} </div>
            <div className='detail'> <span className="description">Birth:</span> {birth_year} </div>
            <div className='detail'> <span className="description">Height:</span> {height / 100 + "m"} </div>
        </div>
    )

export default StarWarsCharacter
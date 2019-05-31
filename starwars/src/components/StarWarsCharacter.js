import React from 'react'
import './StarWars.css'

const StarWarsCharacter = ({characterProperty}) => (
        <div className='starWarsCharacterDetailList'>
            <div className='detail name'>{characterProperty.name} </div>
            <div className='detail'> <span className="description">Sex:</span> {characterProperty.gender === "n/a" ? "robot" : characterProperty.gender} </div>
            <div className='detail'> <span className="description">Birth:</span> {characterProperty.birth_year} </div>
            <div className='detail'> <span className="description">Height:</span> {characterProperty.height / 100 + "m"} </div>
        </div>
    )

export default StarWarsCharacter
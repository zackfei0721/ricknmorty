import React from 'react';

interface CharacterProps {
    name: string;
    image: string;
}

const Character: React.FC<CharacterProps> = ({ name, image}) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <img src={image} alt={name} style={{width: '200px'}}/>
        </div>
    )
}

export default Character;
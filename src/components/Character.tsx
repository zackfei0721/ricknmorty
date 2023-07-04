import React from 'react';
// import styles from './Character.module.css';


interface CharacterProps {
    name: string;
    image: string;
}

const nameStyle = {
    margin: '15px',
};


const Character: React.FC<CharacterProps> = ({ name, image}) => {
    return (
        <div style={
            {width: '200px',
            padding: '15px',
            textAlign: 'center',
        }
        }>
            <img src={image} 
                 alt={name} 
                 style={{
                    width: '100%',
                    borderRadius: '50%',
                    border: '2px solid red',
                 }}/>
            <h3 style={{margin: '15px'}}>{name}</h3>
        </div>
    )
}

export default Character;
import React from 'react';
import CharacterFeed from '../components/CharacterFeed';

const HomePage: React.FC = () => {
  return (
    <div>
      <h1 style={{ 
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '3em',
        fontWeight: 'bold' }}>Rick and Morty Characters</h1>
      <CharacterFeed />
    </div>
  );
};

export default HomePage;
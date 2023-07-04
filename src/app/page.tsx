import React from 'react';
import CharacterFeed from '../components/CharacterFeed';

const HomePage: React.FC = () => {
  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Rick and Morty Characters</h2>
      <CharacterFeed />
    </div>
  );
};

export default HomePage;
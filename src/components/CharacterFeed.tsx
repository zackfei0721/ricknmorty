"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import Pagination from '@mui/material/Pagination';
import { fetchCharacter } from "../services/character";
import styles from './Character.module.css';

interface CharacterData {
    name: string;
    image: string;
}
  


const CharacterFeed: React.FC = () => {
    const [characters, setCharacters] = useState<CharacterData[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [page, setPage] = useState<number>(1);

    useEffect(() => {

        const fetchCharacters = async () => {
            setLoading(true);
            const data = await fetchCharacter(page);
            setCharacters(data.results);
            setLoading(false);
        };

        fetchCharacters();
    }, [page]);

    if(loading) return <h1>Loading...</h1>

    return (
        <div>
            <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                margin: '0 auto',
                border: '2px solid black',
                borderRadius: '10px',
                width: '1000px',
                justifyContent: 'center',
            }}>
                {characters.map((character, index) => (
                <Character key={index} name={character.name} image={character.image} />))}
            </div>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                padding: '15px',
            }}>
                <Pagination count={20} page={page} onChange={(event, value) => setPage(value)} /> 
            </div>
        </div>
        
    );
};

export default CharacterFeed;
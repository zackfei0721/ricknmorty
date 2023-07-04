"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Character from "./Character";
import Pagination from '@mui/material/Pagination';

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
            const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
            setCharacters(res.data.results);
            setLoading(false);
        };

        fetchCharacters();
    }, [page]);

    if(loading) return <h1>Loading...</h1>

    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-around'}}>
            {characters.map((character, index) => (
                <Character key={index} name={character.name} image={character.image} />
            ))}
            <Pagination count={10} page={page} onChange={(event, value) => setPage(value)} />      
        </div>
    );
};

export default CharacterFeed;
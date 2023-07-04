import axios from 'axios';

export async function fetchCharacter(page: number) {
    const res = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    const data = res.data;
    if (!data) {
        throw new Error('Failed to fetch data');
    }
    return { results: data.results, info: data.info };
}
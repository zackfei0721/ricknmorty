export async function fetchCharacter(page: number) {
    const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
    if(!response.ok) {
        throw new Error("Failed to fetch data")
    }
    return await response.json();
}
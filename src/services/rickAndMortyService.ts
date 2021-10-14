import axios from "axios"
import { ICharacter } from "../interfaces/ICharacter"


export const rickAndMortyService = (function() {

    const urlAllCharacters = 'https://rickandmortyapi.com/api/character'

    const getAll = async () => {
        const response: any = await axios.get(urlAllCharacters)
        return response.data["results"]
    }

    const getById = async ({id}: ICharacter) => {
        const response = await axios.get(`urlAllCharacters/${id}`)
    }

    return { getAll, getById }
}())
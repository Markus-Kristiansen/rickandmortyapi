import { createContext, FC, useEffect, useState } from "react";
import { ICharacter } from "../interfaces/ICharacter";
import { rickAndMortyService } from "../services/rickAndMortyService";
import { RickAndMortyContextType } from "../types/RickAndMortyContextType";


export const RickAndMortyContext = createContext<RickAndMortyContextType|null>(null)


export const RickAndMortyProvider: FC = ({children}) => {

    const [characters, setCharacter] = useState<ICharacter[]>([])

    useEffect(() => {
        getAllCharacters()
    }, [])

    const getAllCharacters = async () => {
        const results = await rickAndMortyService.getAll()
        setCharacter(results)
    }

    return(

        <RickAndMortyContext.Provider value={{ characters }}>
            {children}
        </RickAndMortyContext.Provider>

    )
}
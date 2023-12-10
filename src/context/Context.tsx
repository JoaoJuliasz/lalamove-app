import { createContext } from "react";
import { Favorites } from "../types/delivery.types";

type Values = {
    favorites: Favorites
    setFavorites: React.Dispatch<React.SetStateAction<Favorites>>
}

const AppContext = createContext<Values | null>(null);

const AppProvider = AppContext.Provider

export { AppContext, AppProvider }


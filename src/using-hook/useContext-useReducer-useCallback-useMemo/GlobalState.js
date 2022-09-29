import React from "react";
import useCatListManager from "./useCatListManager";


export const GlobalContext = React.createContext();

export const GlobalProvider = ({children}) => {

  const {isLoading, catList, toggleCatFavorite, incrementFavoriteClickCount, favoriteClickCount} = useCatListManager();

  const provider = {isLoading, catList, toggleCatFavorite, incrementFavoriteClickCount, favoriteClickCount}

  return <GlobalContext.Provider value={provider}>{children}</GlobalContext.Provider>;
}
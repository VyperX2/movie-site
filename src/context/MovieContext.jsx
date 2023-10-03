import { createContext, useContext, useState } from "react";

const MovieContext = createContext({})

export const MovieProvider = ({children}) => {
  const [movieId , setMovieId] = useState('')


  return <MovieContext.Provider value={{movieId : movieId , setMovieId}}>
    {children}
  </MovieContext.Provider>
}

export default MovieContext

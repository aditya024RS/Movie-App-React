import {createContext, useState, useContext, useEffect} from "react"

const MovieContext = createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
  const [favourites, setFavorites] = useState(() => { 
    try {
      const stored = localStorage.getItem('favourites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    const storedFavourites = localStorage.getItem('favourites');

    if(storedFavourites) setFavorites(JSON.parse(storedFavourites));
  }, []);

  useEffect(() => {
    localStorage.setItem('favourites', JSON.stringify(favourites));
  }, [favourites]);

  const addToFavourites = (movie) => {
    setFavorites(prev => [...prev, movie])
  }

  const removeFromFavourites = (movieId) => {
    setFavorites(prev => prev.filter(movie => movie.id !== movieId))
  }

  const isFavourite = (movieId) => {
    return favourites.some(movie => movie.id === movieId);
  }

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite
  }

  return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import MovieCard from "./MovieCard";
import { MovieContext } from "../MovieContext";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [pageNo, setPageNo] = useState(1);
  // const [watchList, setWatchList] = useState([]);

  const { watchList, setWatchList, addtoWatchList, removeFromWatchList } = useContext(MovieContext);
  // Instead of useContext(MovieContext), we can also use MovieContextWrapper.Consumer

  const handlePrev = () => {
    if (pageNo == 1) {
      return; 
   }
   setPageNo(pageNo - 1);
  };

  const handleNext = () => {
    setPageNo(pageNo + 1);
  };

  // const addtoWatchList = (movieObj) => {
  //   // spreading the previous watchlist and adding them into a new Array and 
  //   // adding the new movieObj into the newly created watchlist Array.
  //   let updatedWatchlist=[...watchList, movieObj];
  //   setWatchList(updatedWatchlist);
  //   localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  // }

  // const removeFromWatchList = (movieObj) => {
  //   const updatedWatchList = watchList.filter((movie) => movie.id != movieObj.id);
  //   setWatchList([...updatedWatchList]);
  //   localStorage.setItem("watchlist", JSON.stringify(updatedWatchList));
  // }

  useEffect(() => {
    const getMovies = async function () {
      console.log("calling getMovies");

      // type 01: Calling an API through FETCH :::

      // const response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=1525ec660ef3d9896ec2805cb1a55508&language=en-US&page=${pageNo}`);
      // const {results} = await response.json();
      // console.log(results);
      // // setTimeout(() => {
      // //   setMovies(results);
      // // }, 3000);    // added this setTimeout to check Loading..!
      // setMovies(results);
      

      // type 02: Calling an API through AXIOS :::

      const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/movie/now_playing',
        params: {language: 'en-US', page: `${pageNo}`},
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTI1ZWM2NjBlZjNkOTg5NmVjMjgwNWNiMWE1NTUwOCIsIm5iZiI6MTczMzUwMzgxNC4xMjcsInN1YiI6IjY3NTMyYjQ2ODBlNWI4ZjBhNzU2NDJhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.T0oBL0FbgbzZFTz4YdtghEKqiwdtzK3VmBT1sDx4Bos'
        }
      };
      const response = await axios.request(options);
      const movieData = response.data?.results;
      // console.log(movieData);
      setMovies(movieData);
    };
    getMovies();
  }, [pageNo]);   // second variation of useEffect()


  // // getting the selected watchlist movies from local storage
  // useEffect(() => {
  //   if(localStorage.getItem("watchlist")){
  //     let watchlistFromLS = JSON.parse(localStorage.getItem("watchlist"));
  //     setWatchList(watchlistFromLS);
  //   }
  // },[])

  return (
    <>
      {movies == null ? (
        <div>
          <h1>Loading ....</h1>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-2xl font-bold">Trending Movies</h1>
          </div>
          <div className="flex justify-evenly flex-wrap gap-8">
            {movies.map((movieObj) => {
              return (
                <MovieCard 
                key={movieObj.id} 
                movieObj={movieObj}
                watchList={watchList}
                addtoWatchList={addtoWatchList}
                removeFromWatchList={removeFromWatchList}
                />
              );
            })}
          </div>
        </div>
      )}
      
      {/* pagination */}
      <div className="bg-gray-400 h-[50px] w-full mt-6 p-4 flex justify-center gap-2 text-2xl">
        <div className="px-8" onClick={handlePrev}>
          <i class="fa-solid fa-caret-left"></i>
        </div>
        <div>{pageNo}</div>
        <div className="px-8" onClick={handleNext}>
          <i class="fa-solid fa-caret-right"></i>
        </div>
      </div>
    </>
  );
}

export default Movies;
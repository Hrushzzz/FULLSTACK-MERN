import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from './MovieCard';

function Movies() {
    const [movies, setMovies] = useState(null);
    const [pageNo, setPageNo] = useState(1);
    const [watchList, setWatchList] = useState([]);

    const handlePrev = () => {
      if (pageNo == 1) {
         return; 
      }
      setPageNo(pageNo - 1);
    }

    const handleNext = () => {
      setPageNo(pageNo + 1);
    }

    const addToWatchList = (movieObj) => {
      setWatchList([...watchList, movieObj]);
      // spreading the previous watchlist and adding them into a new Array and 
      // adding the new movieObj into the newly created watchlist Array.
    }

    const removeFromWatchList = (movieObj) => {
      const updatedWatchList = watchList.filter((movie) => movie.id != movieObj.id);
      setWatchList([...updatedWatchList]);
      console.log(watchList);
    }


    useEffect(() => {
      const getMovies = async function() {
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
        // console.log(response);
        const movieData = response.data?.results;
        // console.log(movieData);
        setMovies(movieData);
      };
      getMovies();
    }, [pageNo])    // second variation of useEffect()
    
  return (
    <>
      {movies == null ? (
        <div>
          <h1>Loading..!</h1>
        </div>
      ) : (
        <div>
          <div>
            <h1 className="text-center text-2xl font-bold my-5">Trending Movies</h1>
          </div>
          <div className="flex justify-evenly flex-wrap gap-8">
            {movies.map((movieObj) => {
              return (
                <MovieCard 
                key={movieObj.id} 
                movieObj={movieObj} 
                watchList={watchList}
                addToWatchList={addToWatchList}
                removeFromWatchList={removeFromWatchList}
                />
              );
            })}
          </div>
        </div>
      )}

    {/* Pagination */}
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

export default Movies
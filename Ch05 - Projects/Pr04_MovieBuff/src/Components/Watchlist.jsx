import React, { useEffect, useState } from 'react'
//import genreids from "../../utils";

function Watchlist() {

  const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("watchlist")) {
      let updatedWatchlist = JSON.parse(localStorage.getItem("watchlist"));
      console.log(updatedWatchlist);
      setWatchlist(updatedWatchlist);
    }
  }, []);

  const handleIncreasingSorting = () => {
    console.log("sort increasing on basis of rating");
    let sortedArr = watchlist.sort((m1,m2) => m1.vote_average - m2.vote_average);
    console.log(sortedArr);
    setWatchlist([...sortedArr]);
  }

  const handleDecreasingSorting = () => {
    console.log("sort decreasing on basis of rating");
    let sortedArr = watchlist.sort((m1,m2) => m2.vote_average - m1.vote_average);
    setWatchlist([...sortedArr]);
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  useEffect(() => {
    let allGenres = watchlist.map((movieObj) => genreids[movieObj.genre_ids[0]]);
    console.log(allGenres);
    let uniqueGenres = new Set(allGenres);
    console.log(uniqueGenres);
    setGenre([...uniqueGenres]);
  },[watchlist])


  return (

    <>
      <div className="flex flex-wrap justify-around ">
        <button className="border border-gray-200 bg-blue-300 m-4 py-3 px-6 rounded-xl">All Genres</button>
        {
          genre.map(genreName=>(<button className="border border-gray-200 bg-blue-300 m-4 py-3 px-6 rounded-xl">{genreName}</button>))
        }
      </div>

      <div>
        <input 
        type = "text" 
        placeholder = "Search Movies"
        onChange = {handleSearch}
        value = {search}
        className = "h-[3rem] w-[18rem] px-4 outline-none border border-slate-600"
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-4">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className = "flex gap-2">
                  <i onClick = {handleIncreasingSorting} class="fa-solid fa-arrow-up"></i>
                  <div>Ratings</div>
                  <i onClick = {handleDecreasingSorting} class="fa-solid fa-arrow-down"></i>
                </div>
              </th>
              <th>
                <div>
                  <div className = "flex">Popularity</div>
                </div>
              </th>
              <th>
                <div>
                  <div className = "flex">Genre</div>
                </div>
              </th>
            </tr>
          </thead>

          <tbody className = "divide-y divide gray-100 border-t border-gray-100">
            {
              // this function is usedd to filter watchlist on the basis of search 
              watchlist.filter((movieObj) => {
                let searchText = search.toLowerCase();
                let movieName = movieObj.title.toLowerCase();
                return movieName.includes(searchText);
              })
              // this function is used to display watchlist on UI
              .map((movieObj) => {
                <tr className = "hover:bg-gray-50">
                  <td className = "flex items-center px-6 py-4 font-normal text-gray-900">
                    <img 
                      className = "h-[6rem] w=[10rem] object-fit" 
                      src = {`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`} 
                      alt=''
                    />
                    <div className = "font-medium text-gray-700 text-sm">{movieObj.title}</div>
                    </td>
                    <td className = "pl-6 py-4">{movieObj.vote_average}</td>
                    <td className = "pl-6 py-4">{movieObj.popularity}</td>
                    <td className = "pl-6 py-4">{genreids[movieObj.genre_ids[0]]}</td>
                </tr> 
              })
            }
          </tbody>
        </table>
    </div>
    </>
  );
}

export default Watchlist
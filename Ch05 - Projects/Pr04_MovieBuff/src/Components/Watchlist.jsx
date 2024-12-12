import React, { useEffect, useState, useContext } from "react";
import genreidName from "../../utils";
import { MovieContext } from "../MovieContext";

function Watchlist() {
  // const [watchlist, setWatchlist] = useState([]);
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("");

  const { watchList, setWatchList,  removeFromWatchList } = useContext(MovieContext);

  // useEffect(() => {
  //   if (localStorage.getItem("watchlist")) {
  //     let updatedWatchList = JSON.parse(localStorage.getItem("watchlist"));
  //     console.log(updatedWatchList);
  //     setWatchlist(updatedWatchList);
  //   }
  // }, []);

  const handleIncreasingSorting = () => {
    console.log("sort increasing on basis of rating");
    let sortedArr = watchList.sort(
      (m1, m2) => m1.vote_average - m2.vote_average
    );
    console.log(sortedArr);
    setWatchList([...sortedArr]);
  };

  const handleDecreasingSorting = () => {
    console.log("sort decreasing on basis of rating");
    let sortedArr = watchList.sort(
      (m1, m2) => m2.vote_average - m1.vote_average
    );
    setWatchList([...sortedArr]);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    let allGenres = watchList.map(
      (movieObj) => genreidName[movieObj.genre_ids[0]]
    );
    console.log(allGenres);
    let uniqueGenres = new Set(allGenres);
    console.log(uniqueGenres);
    setGenre(["All Genres", ...uniqueGenres]);
  }, [watchList]);

  const handleGenre = (genreName) => {
    setCurrGenre(genreName);
  };

  // const handleDelete = (movieToBeDeleted) => {
  //   //delete a movie from watchlist
  //   // 1. filter that movie from watchlist , it would not be visible on UI
  //   let updatedWatchlist = watchList.filter(
  //     (movie) => movie.id != movieToBeDeleted.id
  //   );
  //   setWatchList(updatedWatchlist);
  //   // 2. delete it from LS , so that when page is reloaded that movie does not come up
  //   localStorage.setItem("watchlist", JSON.stringify(updatedWatchlist));
  // };

  return (
    <>
      <div className="flex flex-wrap justify-around ">
        {genre.map((genreName) => (
          <button
            className={
              genreName == currGenre
                ? "border border-gray-200 bg-blue-600 m-4 py-3 px-6 rounded-xl"
                : "border border-gray-200 bg-blue-300 m-4 py-3 px-6 rounded-xl"
            }
            onClick={() => handleGenre(genreName)}
          >
            {genreName}
          </button>
        ))}
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Movies"
          onChange={handleSearch}
          value={search}
          className="h-[3rem] w-[18rem] px-4 outline-none border border-slate-600"
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-4">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr>
              <th>Name</th>
              <th>
                <div className="flex gap-2">
                  <i
                    onClick={handleIncreasingSorting}
                    class="fa-solid fa-arrow-up"
                  ></i>
                  <div>Ratings</div>
                  <i
                    onClick={handleDecreasingSorting}
                    class="fa-solid fa-arrow-down"
                  ></i>
                </div>
              </th>
              <th>
                <div>
                  <div className="flex">Popularity</div>
                </div>
              </th>
              <th>
                <div>
                  <div className="flex">Genre</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide gray-100 border-t border-gray-100">
            {watchList
              .filter((movieObj) => {
                //return if movieObj's genre is equl to currGenre
                if (currGenre && currGenre != "All Genres")
                  return genreidName[movieObj.genre_ids[0]] == currGenre;
                return movieObj;
              })
              // this function is used to filter watchlist on the basis of search
              .filter((movieObj) => {
                let searchText = search.toLowerCase();
                let movieName = movieObj.title.toLowerCase();
                return movieName.includes(searchText);
              })
              // this function is used to display watchlist on UI
              .map((movieObj) => (
                <tr className="hover:bg-gray-50">
                  <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                    <img
                      className="h-[6rem] w=[10rem] object-fit"
                      src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      alt=""
                    />
                    <div className="font-medium text-gray-700 text-sm">
                      {movieObj.title}
                    </div>
                  </td>
                  <td className='className="pl-6 py-4"'>
                    {movieObj.vote_average}
                  </td>
                  <td className="pl-6 py-4">{movieObj.popularity}</td>
                  <td className="pl-6 py-4">
                    {genreidName[movieObj.genre_ids[0]]}
                  </td>
                  <td
                    className="pl-6 py-4 text-red-600"
                    onClick={() => removeFromWatchList(movieObj)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
import React from "react";

function MovieCard({
  movieObj,
  watchList,
  addtoWatchList,
  removeFromWatchList,
}) {
  //checking if a particular movie is present in watchlist or not
  function doesContain() {
    for (let movie of watchList) {
      if (movie.id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex flex-col items-end justify-between"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movieObj.poster_path})`,
      }}>

      <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl flex-end">
        {movieObj.title}
      </div>
      {
        doesContain() ? (
          <div
            className="flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/70"
            onClick={() => removeFromWatchList(movieObj)}
          >
            ❌
          </div>
        ) : (
          <div
            className="flex justify-center m-4 h-8 w-8 items-center rounded-lg bg-gray-900/70"
            onClick={() => addtoWatchList(movieObj)}
          >
            😍
          </div>
        )
      }
    </div>
  );
}

export default MovieCard;

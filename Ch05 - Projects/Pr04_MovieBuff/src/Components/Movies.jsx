import React, { useState } from 'react'

function Movies() {

    const [movies, setMovie] = useState([
        {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 1",
          },
          {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 2",
          },
          {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 3",
          },
          {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 4",
          },
          {
            url: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68",
            title: "Movie 5",
          },
    ]);
  return (
    <div>
        <div><h1 className="text-center text-2xl font-bold">Trending Movies</h1></div>
        <div className="flex justify-evenly flex-wrap gap-8">
            {movies.map((movieObj) => {
                return (
                <div className = "h-[40vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer" style={{backgroundImage:`url(${movieObj.url})`}}>
                    <div className="text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-xl">{movieObj.title}</div>
                </div>)
            })

            }
        </div>
    </div>
  );
}

export default Movies
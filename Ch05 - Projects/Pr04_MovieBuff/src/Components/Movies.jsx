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

    const [pageNo, setPageNo] = useState(1);

    const handlePrev = () => {
      if (pageNo == 1) {
         return; 
      }
      setPageNo(pageNo - 1);
    }

    const handleNext = () => {
      setPageNo(pageNo + 1);
    }
  return (
    <>
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

    <div className='bg-gray-400 h-[50px] w-full mt-6 p-4 flex justify-center gap-2 text-2xl'>
      <div className='px-8' onClick={handlePrev}><i class="fa-solid fa-caret-left"></i></div>
      <div>{pageNo}</div>
      <div className='px-8' onClick={handleNext}><i class="fa-solid fa-caret-right"></i></div>
    </div>
    </>
  );
}

export default Movies
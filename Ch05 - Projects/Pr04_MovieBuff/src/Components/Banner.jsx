import React, { useEffect, useState } from "react";

function Banner() {
  const [title, setTitle] = useState("");
  const [bannerImage, setBannerImage] = useState(
    "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
  );

  useEffect(() => {
    const getMovies = async function () {
      const resp = await fetch(
        `https://api.themoviedb.org/3/trending/movie/day?api_key=3aec63790d50f3b9fc2efb4c15a8cf99&language=en-US&page=1`
      );
      const { results } = await resp.json();
      console.log(results);
      const { backdrop_path, title } = results[0];
      setBannerImage(backdrop_path);
      setTitle(title);
    };
    getMovies();
  }, []);

  return (
    <div
      className="h-[20vh] md:h-[75vh] bg-cover bg-center flex items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${bannerImage})`,
      }}
    >
      <div className="text-white w-full text-center text-2xl">{title}</div>
    </div>
  );
}

export default Banner;

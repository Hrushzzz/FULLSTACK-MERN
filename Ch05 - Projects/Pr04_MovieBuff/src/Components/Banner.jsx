import React, { useEffect, useState } from "react";

function Banner() {
  const [title, setTitle] = useState("");
  const [bannerImage, setBannerImage] = useState(
    "https://images.hdqwalls.com/wallpapers/bthumb/spiderman-the-ultimate-nu.jpg"
  );

  useEffect(() => {
    const getMovies = async function () {
      const resp = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=1525ec660ef3d9896ec2805cb1a55508&language=en-US&page=1`
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

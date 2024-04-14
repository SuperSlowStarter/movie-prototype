import { useEffect, useState } from "react";
import { Movies } from "../components/Movies";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year` //평점을 조절할 수 도 있찌
    );
    const json = await response.json();

    setMovies(json.data.movies); //setMovies is modifier of EMPTY array,,, "movies"
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movies
              key={movie.id}
              id={movie.id}
              coverImage={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;

// useEffect(() => {
//   fetch(
//     `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
//   )
//     .then((response) => response.json())
//     .then((json) => {
//       setMovies(json.data.movies);
//       setLoading(false);
//     });
// });
// old way to call API..... now we use async, await

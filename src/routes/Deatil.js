import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";

export function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    console.log(json);
    setMovies(json.data.movie.background_image); //setMovies is modifier of EMPTY array,,, "movies"
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img src={movies} />
        </div>
      )}
    </div>
  );
}

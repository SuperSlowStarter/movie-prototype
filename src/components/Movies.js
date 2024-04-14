import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movies = ({ coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt="movie_posters" />
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movies.propTypes = {
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //propTypes는 해당 props가 그 자료형으로 작동하는지 검사해준다. 잠재적인 문제를 피하게 해준다.ㄴ

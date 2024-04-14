import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Movies = ({ id, coverImage, title, summary, genres }) => {
  //props는 object일 뿐이고 우린 그걸 열어서 item을 쓰는 것
  return (
    <div>
      <img src={coverImage} alt="movie_posters" />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>{" "}
        {/*jsx구문 중에는 {}을 써서 javascript를 사용할 것**/}
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
  id: PropTypes.number.isRequired,
  coverImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}; //propTypes는 해당 props가 그 자료형으로 작동하는지 검사해준다. 잠재적인 문제를 피하게 해준다.ㄴ

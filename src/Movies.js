export const Movies = ({ coverImage, title, summary, genres }) => {
  return (
    <div>
      <img src={coverImage} alt="movie_posters" />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

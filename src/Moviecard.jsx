

const Moviecard = ({ movie }) => {
  const imageUrl = movie.i?.imageUrl ?? ''; // If movie.i or movie.i.imageUrl is not available, imageUrl will be an empty string

  return (
    <div className="movie">
      <div>
        <p>{movie.y}</p>
        <p>{Math.round(movie.rank / 100)}</p>
      </div>
      <div>
      {imageUrl && <img src={imageUrl} alt={movie.l} />}
      </div>
      <div>
        <span>{movie.qid}</span>
        <h3>{movie.l}</h3>
      </div>
    </div>
  );
};
export default Moviecard
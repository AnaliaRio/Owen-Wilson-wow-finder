import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
  const movieElements = props.movieScenes

    .sort((a, b) => a.movie.localeCompare(b.movie))

    .map((movie) => {
      return (
        <li className='card' key={movie.index}>
          <MovieSceneItem movie={movie} />
        </li>
      );
    });

  return (
    <>
      {movieElements.length === 0 ? (
        <section className='noresults'>
          <p>Sorry... No "wow" scenes here 😕</p>
          <p>Try another word 👀</p>
        </section>
      ) : (
        <section>
          <ul className='cards'>{movieElements}</ul>
        </section>
      )}
    </>
  );
}

export default MovieSceneList;

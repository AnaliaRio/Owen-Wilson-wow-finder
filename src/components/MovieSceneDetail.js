function MovieSceneDetail(props) {


  return (
    <>
    <section className='detail'>
      <img
        className='detail__poster'
        alt={props.movie.poster}
        src={props.movie.poster} 
      />
      
      <h4 className='detail__title'>🎞  {props.movie.movie}</h4>
      <p className='detail__description line'>🗣  "{props.movie.full_line}"</p>
      <p className='detail__description'>🎬  {props.movie.director}</p>
      <a
        className='detail__description audio'
        href={props.movie.audio}
        target='_blank'
        rel='noreferrer'
        >
          🎧  Escuchar audio
        </a>
    </section>

    </>
  );
}


export default MovieSceneDetail;
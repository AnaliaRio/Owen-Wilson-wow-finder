function FilterMovie (props) {
  
  const handleChange = (ev) => {
    ev.preventDefault();
    props.handleFilterMovie(ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  
  };

  return (
  
    <form
      className="form"
      onSubmit={handleSubmit}
    >
      <label
        htmlFor='movie'
        className='form__label'
      >
        Movie
      </label>
      <input
        type='search'
        name='movie'
        onChange={handleChange}
        value={props.filterMovie}
        className='form__input'
        placeholder='Search a movie'
      />
    </form>
    
  );
};


export default FilterMovie;
function FilterYear(props) {

  const handleChange = (ev) => {
    props.handleFilterYear(ev.target.value);
  };


  const renderYear = () => {
    return props.year.sort().map((year, index) => {
      return <option key={index}>{year}</option>;
    });
  };
  // Sort - Arrange years in chronological order



  return (
    <>
    <form className='form'>
      <label htmlFor="year" className='form__label'>Year</label>
      <select
        name="year"
        onChange={handleChange}
        value={props.filterYears}
        className='form__input'
      >
        <option value="0">All</option>
        {renderYear()}
      </select>
      </form>
    </>
  );
}


export default FilterYear;
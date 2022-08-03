function FilterTotalWow(props) {
  const handleChange = (ev) => {
    console.log(ev.target.value);
    props.handleFilterTotalWow(ev.target.value);
  };

  const iteratedValue = () => {
    let allOptions = [<option value='0'>All</option>];

    for (let index = 1; index <= 10; index++) {
      allOptions.push(
        <option key={index} value={index}>
          {index}
        </option>
      );
    }

    return allOptions;
  };

  return (
    <>
      <form className='form'>
        <label htmlFor='wow' className='form__label'>
          Total "wows" in movie
        </label>
        <select
          name='wow'
          onChange={handleChange}
          value={props.filterTotalWow}
          className='form__input'
        >
          {iteratedValue()}
        </select>
      </form>
    </>
  );
}

export default FilterTotalWow;

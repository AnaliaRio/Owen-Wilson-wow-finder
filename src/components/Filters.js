import FilterYear from './FilterYear';
import FilterMovie from './FilterMovie';
import FilterTotalWow from './FilterTotalWow';


function Filters (props) {



  return (
    <section className="filters">
        <FilterMovie
          filterMovie={props.filterMovie}
          handleFilterMovie={props.handleFilterMovie}
        />

        <FilterTotalWow
          filterTotalWow={props.filterTotalWow}
          handleFilterTotalWow={props.handleFilterTotalWow}
        />

        <FilterYear
        handleFilterYear={props.handleFilterYear}
        year={props.year}/>
    </section>
  );
}


export default Filters;
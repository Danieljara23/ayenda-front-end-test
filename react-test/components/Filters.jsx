const Filters = ({ filters, applyFilter }) => {
  return (
    <section className="filters">
      {filters.map(filter =>
        <button
          key={filter.id} 
          className="filters__button"
          onClick={() => applyFilter(filter.id)}
        >
          {filter.name}
        </button>
      )}
    </section>
  )
}

export default Filters;

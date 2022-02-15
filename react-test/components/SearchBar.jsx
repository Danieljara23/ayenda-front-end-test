const SearchBar = ({ value, onChange }) => {
  return (
    <section className="search-bar">
      <img src="./search-icon.svg" className="search-bar__icon"/>
      <input
        className="search-bar__input" 
        value={value} 
        onChange={onChange} 
      />
    </section>
  )
}

export default SearchBar;

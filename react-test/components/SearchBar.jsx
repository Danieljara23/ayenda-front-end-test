const SearchBar = ({ value, onChange }) => {
  return (
    <section className="search-bar">
      <img 
        className="search-bar__icon"
        src="./search-icon.svg" 
        alt="search icon"
      />
      <input
        className="search-bar__input" 
        value={value} 
        onChange={onChange} 
      />
    </section>
  )
}

export default SearchBar;

import styles from '../style/AllSearch.module.css'

export function AllSearch ({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
      setSearchValue(event.target.value);
    }

    return (
    <input 
      name='query' 
      type='search'
      className={styles.search}
      placeholder='Search'
      value = {searchValue}
      onChange={onSearchValueChange}
    />
  );
};
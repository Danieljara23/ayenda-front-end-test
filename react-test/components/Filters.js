import styles from '../style/Filters.module.css'

export function Filters ({searchValue, setSearchValue}) {
    const onSearchValueChange = (event) => {
      setSearchValue(event.target.value);
    }

    return (
    <nav className={styles.container}>
      <button 
        type='submit' 
        className={styles.button}
        value = 'ant-man'
        onClick={onSearchValueChange}
      >
        Ant-Man
      </button>  

      <button 
        type='submit' 
        className={styles.button}
        value = 'gun theory'
        onClick={onSearchValueChange}
      >
        Gun Theory
      </button>  

      <button 
        type='submit' 
        className={styles.button}
        value = 'x-men'
        onClick={onSearchValueChange}
      >
        X-men
      </button>  

    </nav>
  );
};
import React from 'react';

const HULK = '1009351,1017098,1017333'
const SPIDER_MAN = '1011054,1014873,1016452'
const THOR = '1009664,1017576,1017106'
const WOLVERINE = '1009718,1017297,1011006'

const Search = ({searchValue, setSearchValue, loading,setSearchCharacters}) => {
    const onSearchValueChange = (event) => {
        setSearchValue(event.target.value);
    };
    return (
        <div>
            <div className="is-flex is is-justify-content-space-around is-align-items-center are-medium">
                <input id="input-search" className="input is-medium"
                       placeholder="Titulo"
                       value={searchValue}
                       onChange={onSearchValueChange}
                       disabled={loading}
                />
            </div>
            <div className="tags-content is-flex is-justify-content-space-between is mt-4">
                <button className="button is-primary" onClick={() => setSearchCharacters(HULK)}>Hulk</button>
                <button className="button is-danger" onClick={() => setSearchCharacters(SPIDER_MAN)}>Spider-man</button>
                <button className="button is-warning" onClick={() => setSearchCharacters(THOR)}>Thor</button>
                <button className="button is-info" onClick={() => setSearchCharacters(WOLVERINE)}>Wolverine</button>
            </div>
        </div>


    )
}

export default Search;

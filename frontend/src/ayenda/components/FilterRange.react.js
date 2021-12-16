import React , {useEffect, useRef} from 'react';


const FilterRangeComponent = (props) => {      
        let start_year = useRef(null);
        let end_year = useRef(null);
        const handleFilterRange = () =>{

            props.findComicsByYears(start_year.current.value, end_year.current.value);
        }

        return <div>
        <label className="form-label">Buscar por rango</label>
                <div className="input-group mb-3">
        <input type="text" ref={start_year} className="form-control" placeholder="ej: 2005" aria-label="año inicio" />
        <span className="input-group-text">a</span>
        <input type="text" ref={end_year} className="form-control" placeholder="ej: 2010" aria-label="año final" />
        <a className="btn btn-danger" onClick={handleFilterRange}>Buscar</a>
        </div>
        
        </div>
}

export default FilterRangeComponent;
import React , {useEffect} from 'react';
import PropTypes from 'prop-types'

const propTypes = {
    characteres: PropTypes.object,
  }

const FilterComponent = (props) => {

        var myAlert = document.getElementById('alert');    
        if(myAlert){
            myAlert.addEventListener('close.bs.alert', function (evt) {
                props.clearFilter();
            }, false);
        }
       

        return (<div className="card" >
                <div className="card-header">
                    Filtrar Por:
                    {props.currentFilter &&
                        <div className="alert alert-dark alert-dismissible fade show" role="alert" id="alert">
                            <strong>{props.currentFilter}</strong>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    }
                </div>
                <ul class="list-group list-group-flush">
                    {
                        Object.keys(props.characters).map((item, i) => {
                            return <li key={i} className="list-group-item btn text-start" onClick={props.showComicsByCharacterId(item, props.characters[item])}>{props.characters[item]}</li>
                        }) 
                    }
                </ul>
        </div>)
}

FilterComponent.propTypes = propTypes
export default FilterComponent;
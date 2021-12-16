import React from 'react';
import PropTypes from 'prop-types'
import ComicData from './ComicData.react';
const ComicDataList = (props) => {

    return <div className='row'> 
    
        {Object.values(props.entities).map(({id, title, thumbnail, description, prices, characters}, index)=>{
            
            return (
                <div className='col-md-4 col-sm-12 col-xs-6 card-wrapper mb-3' key={index}>        
                    <ComicData 
                        id={id}
                        title={title}
                        img={thumbnail}
                        description={description}
                        prices={prices}
                        creators={characters}
                    />
            
            </div>
            )
            })
        }
    
    </div>
};


const propTypes = {
    entities: PropTypes.object,
  }


export default ComicDataList;

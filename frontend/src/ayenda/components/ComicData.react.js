import React from 'react'
import PropTypes from 'prop-types'
import LazyImage from './LazyImage.react'


const propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.object,
  prices:PropTypes.array,
  creators: PropTypes.object,
}

const DataCard = ({ id, title, img, prices, creators }) => (
    <div className='card shadow-sm  h-100 '>
    <img src={`${img.path}.${img.extension}`} className="card-img-top lazy" style={{maxHeight:190}} alt={title}/>
      <div className='card-body'>
        <div className='card-img' style={{ backgroundImage: `url(${img.path}.${img.extension})` }} />
        <div className='card-title'>{title}</div>
        {creators.items.length > 0 ? <h6 className="card-subtitle mb-2 text-muted">{creators.items[0].name}</h6>:''}
      </div>
      <div className="card-footer bg-transparent border-top-0"><a href="#" className="btn btn-danger btn-sm float-end">{prices[0].price} USD</a></div>
    </div>
)

DataCard.propTypes = propTypes
export default DataCard
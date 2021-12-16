import React from 'react'
import './Header.scss'

const Header = () => (
  <div className='container-fluid header'>
    <div className='row'>
      <div className='col-sm-6 col-xs-12'>
        
          <img className='logo' height='40' src='/img/MarvelLogoAPI.svg' role='presentation' />
        
      </div>
      <div className='col-sm-6 col-xs-12 navtop'>
        <Link to='/characters'>Characters</Link>
        <Link to='/comics'>Comics</Link>
        <Link to='/series'>Series</Link>
      </div>

    </div>

  </div>
)

export default Header

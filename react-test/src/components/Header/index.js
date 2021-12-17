import React from 'react';

const Header = (props) => (
    <div className="columns is-mobile is-centered">
        {props.children}
    </div>
);

export default Header;

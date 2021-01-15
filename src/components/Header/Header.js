import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className="container">
                <h1>{props.title}</h1>
                {props.subtitle && <h2>{props.subtitle}</h2>}
            </div>
        </header>
    );
}

Header.defaultProps = {
    title: 'All Knowing Robot Rabbit'
};

export default Header;
import React from 'react';
import './Item.scss'

const Item = ({title, description}) => {
    return (
        <div className="item">
            <img className="item__img" />
            <div className="item__info">
                <p className="item__title">{title}</p>
                <p className="item__description">{description}</p>
            </div>
        </div>
    );
}

export default Item;

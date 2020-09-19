import React, { useContext } from 'react';
import Item from '../Item/Item'
import './List.scss'


const List = ({items}) => {


    return (
        <div className="list">
            {items.map((item, id) => <Item title={item.name} description={item.description} key={id}/>)}
        </div>
    );
}

export default List;

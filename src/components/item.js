import React, { Component } from 'react';

class Item extends Component {
    render(){
        const { id, title } = this.props;
        return (
            <li className="collection-item">
                {title}
            </li>
        );
    }
}

export default Item;

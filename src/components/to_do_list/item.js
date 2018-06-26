import React, { Component } from 'react';

class Item extends Component {
    render(){
        const { title, complete, deleteItem, toggleComplete } = this.props;

        return (
            <li className="collection-item row">
                <div className={`item-title col s10 ${complete ? 'completed' : ''}`}>{title}</div>
                
                <div className="col s2 right-align">
                    <button
                        className="btn btn-floating red white-text"
                        onClick={deleteItem}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                    <button
                        className={`btn btn-floating ${complete ? 'yellow' : 'green'}`}
                        onClick={toggleComplete}
                    >
                        <i className={`material-icons ${complete ? 'grey-text text-darken-1' : 'white-text'}`}>{complete ? 'restore' : 'check'}</i>
                    </button>
                </div>
            </li>
        );
    }
}

export default Item;

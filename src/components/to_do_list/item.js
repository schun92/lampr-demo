import React, { Component } from 'react';

class Item extends Component {
    render(){
        const { title, complete, deleteItem, toggleComplete } = this.props;

        const titleStyle = {
            paddingTop: '10px',
        }

        return (
            <li className="collection-item row">
                <div style={titleStyle} className={`col s10 ${complete ? 'completed' : ''}`}>{title}</div>
                
                <div className="col s2 right-align">
                    <button
                        className="btn btn-floating red white-text"
                        onClick={deleteItem}
                    >
                        <i className="material-icons">delete</i>
                    </button>
                    <button
                        className="btn btn-floating green white-text"
                        onClick={toggleComplete}
                    >
                        <i className="material-icons">check</i>
                    </button>
                </div>
            </li>
        );
    }
}

export default Item;

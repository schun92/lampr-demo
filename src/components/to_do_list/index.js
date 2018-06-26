import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import Input from './input';
import { formatPostData } from '../../helpers';
import './list.css';

class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
            newItem: {
                title: '',
                details: ''
            },
            submitted: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    componentWillMount() {
        this.getListData();
    }

    async getListData() {
        const response = await axios.get('/api/index.php?action=to_do_items');

        console.log('GET DATA RESPONSE:', response);

        this.setState({
            list: response.data.listItems
        });
    }

    async deleteItem(id) {
        const resp = await axios.delete('/api/index.php', {
            params: {
                action: 'delete_todo_item',
                id: id
            }
        });

        this.getListData();
    }

    async addItem(e) {
        e.preventDefault();

        const item = formatPostData(this.state.newItem);

        const response = await axios.post('/api/index.php?action=add_item', item);

        this.setState({
            newItem: {
                title: '',
                details: ''
            },
            submitted: true
        });

        this.getListData();
    }

    handleInputChange(e) {
        const { name, value } = e.target;
        const { newItem } = this.state;

        this.setState({
            submitted: false,
            newItem: { ...newItem, [name]: value }
        });
    }

    async handleToggleComplete(id, complete){
        console.log('Complete ID:', id);
        const dataToSend = {
            id: id,
            complete: !complete
        };

        const resp = await axios.patch('/api/index.php', dataToSend, {
            params: {
                action: 'to_do_set_complete'
            }
        });

        this.getListData();
    }

    render() {
        const { list, submitted, newItem: { title, details } } = this.state;

        const listElements = list.map(item => {
            return <Item key={item.id} toggleComplete={this.handleToggleComplete.bind(this, item.id, item.complete)} deleteItem={this.deleteItem.bind(this, item.id)} {...item} />
        });

        return (
            <div className="to-do-list">
                <h1 className="center cyan-text text-accent-4">To Do List</h1>
                <form onSubmit={this.addItem} className="row">
                    <Input name="title" label="Title" value={title} onChange={this.handleInputChange} submitted={submitted} />
                    <Input name="details" label="Details" value={details} onChange={this.handleInputChange} submitted={submitted} />

                    <div className="col s12 right-align">
                        <button className="btn cyan accent-4">Add Item</button>
                    </div>

                </form>
                <ul className="collection">
                    {listElements}
                </ul>
            </div>
        );
    }
}

export default ToDoList;

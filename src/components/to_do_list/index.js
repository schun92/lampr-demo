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
            submitted: false,
            error: 'Loading',
            errors: []
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

        const { error, listItems } = response.data;

        let newState = {
            list: [],
            error: ''
        };

        if(listItems){
            newState.list = listItems;
        } else if (error){
            newState.error = error
        }

        this.setState(newState);
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

        const { errors, success } = response.data;

        if(!success){
            return this.setState({ errors });
        }

        this.setState({
            newItem: {
                title: '',
                details: ''
            },
            submitted: true,
            errors: []
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
        const { error, errors, list, submitted, newItem: { title, details } } = this.state;

        let listDisplay = <li className="list-error center grey-text text-lighten-1">{error}</li>;
        let errorsDisplay = [];

        if(list.length){
            listDisplay = list.map(item => {
                return <Item key={item.id} toggleComplete={this.handleToggleComplete.bind(this, item.id, item.complete)} deleteItem={this.deleteItem.bind(this, item.id)} {...item} />
            });
        }

        if(errors){
            errorsDisplay = errors.map( err => <p key={err} className="red-text">{err}</p>);
        }

        return (
            <div className="to-do-list">
                <h1 className="center cyan-text text-accent-4">To Do List</h1>
                <form onSubmit={this.addItem} className="row">
                    <Input name="title" label="Title" value={title} onChange={this.handleInputChange} submitted={submitted} focus />
                    <Input name="details" label="Details" value={details} onChange={this.handleInputChange} submitted={submitted} />

                    <div className="col s12">
                        <div className="row">
                            <div className="col s10">
                                {errorsDisplay}
                            </div>
                            <div className="col s2 right-align">
                                <button className="btn cyan accent-4">Add Item</button>
                            </div>
                        </div>
                    </div>

                </form>
                <ul className="collection">
                    {listDisplay}
                </ul>
            </div>
        );
    }
}

export default ToDoList;

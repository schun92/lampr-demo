import React, { Component } from 'react';
import axios from 'axios';
import Item from './item';
import Input from './input';
import { formatPostData } from '../helpers';

class ToDoList extends Component {
    constructor(props){
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
    }
    
    componentWillMount(){
        this.getListData();
    }

    async getListData(){
        const response = await axios.get('/api/index.php?action=to_do_items');

        console.log('GET DATA RESPONSE:', response);

        this.setState({
            list: response.data.listItems
        });
    }

    async addItem(e){
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

    handleInputChange(e){
        const { name, value } = e.target;
        const { newItem } = this.state;

        this.setState({
            submitted: false,
            newItem: {...newItem, [name]: value}
        });
    }

    render(){
        const { list, submitted, newItem: { title, details }} = this.state;

        const listElements = list.map(({id, title}) => {
            return <Item key={id}  id={id} title={title}/>
        });

        return (
            <div className="to-do-list">
                <h1 className="center cyan-text text-accent-4">To Do List</h1>
                <form onSubmit={this.addItem} className="row">
                    <Input name="title" label="Title" value={title} onChange={this.handleInputChange} submitted={submitted}/>
                    <Input name="details" label="Details" value={details} onChange={this.handleInputChange} submitted={submitted}/>
                    
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

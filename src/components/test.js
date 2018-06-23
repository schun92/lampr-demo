import React, { Component } from 'react';
import axios from 'axios';
import { formatPostData } from '../helpers';

class Test extends Component {
    componentWillMount(){
        const dataToPost = {
            name: 'Bob',
            course: 'Math 201',
            grade: 98
        }

        const postData = formatPostData(dataToPost);

        axios.put('/api/index.php', postData, {
            params: {
                method: 'get-data'
            }
        });

        // axios.post('/api/test.php', params).then(resp => {
        //     console.log('POST:', resp);
        // });

        // axios.get('/api/get-data.php').then( resp => {
        //     console.log('GET:', resp);
        // });
    }

    render(){
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        );
    }
}

export default Test;

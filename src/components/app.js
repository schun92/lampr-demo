import React from 'react';
import 'materialize-css/dist/css/materialize.css';
import '../assets/css/app.css';

import ToDoList from './to_do_list';

const App = () => (
    <div className="container">
        <ToDoList/>
    </div>
);

export default App;

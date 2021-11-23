import React from 'react';
import Timer from './Timer';
import Heading from './Heading';
import AddTodo from './AddTodo';
import GetTodo from './GetTodo';

const App = function () {




    return (
        <div>
            <Heading />
            <Timer />
            <AddTodo />
            <GetTodo/>
        </div>
    );
}

export default App;
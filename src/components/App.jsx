// src/App.jsx
import React from 'react';
import Counter from './components/Counter';
import DisplayMessage from './components/DisplayMessage';
import ClassCounter from './components/ClassCounter';

const App = () => {
    return (
        <div>
            <Counter />
            <DisplayMessage message="Hello from Stateless Component!" />
            <ClassCounter />
        </div>
    );
};

export default App;

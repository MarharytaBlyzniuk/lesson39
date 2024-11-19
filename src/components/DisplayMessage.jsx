// src/components/DisplayMessage.jsx
import React from 'react';

const DisplayMessage = ({ message }) => {
    return (
        <div>
            <h1>Stateless Component</h1>
            <p>{message}</p>
        </div>
    );
};

export default DisplayMessage;

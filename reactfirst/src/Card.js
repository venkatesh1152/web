// src/Card.js
import React, { useState } from 'react';
import './Card.css';

const Card = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = () => {
        alert(`Name: ${name}, Age: ${age}`);
    };

    return (
        <div className="card">
            <div className="card-body">
                <h2>Enter Your Details</h2>
                <div className="input-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="age">Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                </div>
                <button onClick={handleSubmit}>OK</button>
            </div>
        </div>
    );
};

export default Card;

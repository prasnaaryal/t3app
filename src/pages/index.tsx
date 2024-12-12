import React, { useState } from 'react';

const App = () => {
    const [todos, setTodos] = useState<string[]>([]);  // Corrected initialization
    const [input, setInput] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    };

    const handleAddTodo = () => {
        if (input.trim() !== '') {
            setTodos([...todos, input]);
            setInput('');
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={input} 
                onChange={handleInputChange} 
                placeholder="Add new task..."
            />
            <button onClick={handleAddTodo}>Add Task</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

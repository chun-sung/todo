import React from 'react';
import './TodoInput.css'

const TodoInput = ({ value, onChange, onInsert}) => {

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            onInsert();
        }
    }

    return  (
        <div className="todo-input">
            <input onChange={onChange} value={value} onkeyPress={handleKeyPress}  />
            <div className="add-button" onClick={onInsert}>추가</div>
        </div>
    )

}
export default TodoInput;
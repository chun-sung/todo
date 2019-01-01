import React, { Component } from 'react'
import './TodoItem.css'

class TodoItem extends Component {
 
  render() {
      const { done, children, onToggle, onRemove} = this.props;
               // done="true"  이렇게 해야 된다.(그냥 done 하면 안됨)
    return (
      <div className="todo-item" onClick={onToggle}>
          <input className="tick" type="checkbox" checked={done} readOnly />
          <div className="text" done="true">{children}</div>   
          <div className="delete" onClick={(e) => {onRemove(); e.stopPropagation();}} >[지우기]</div>
      </div>
    );
  }
}
export default TodoItem;
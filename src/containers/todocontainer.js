import React from 'react';
import { connect, Dispatch } from 'react-redux';
import { addTodo, toggleTodo } from '../actions/index';
import './styles/todocontainer.css';

class TodoContainer extends React.Component {
  constructor(props) {
    super(props);
    const { todos, toggleTodo, addTodo } = props;
  }
  onSubmit(event){
    const input = event.target;
    const text = input.value;
    const isEnterKey = (event.which == 13);
    const isLongEnough = text.length > 0;

    if(isEnterKey && isLongEnough) {
      input.value = '';
      this.props.addTodo(text);
    }
  }
  toggleClick(id) {
      return function(event){
          return this.props.toggleTodo(id);
      }
  }
    render(){
        return (
           <div className='todo'>
             <input type='text'
                  className='todoentry'
                  placeholder='Add todo'
                  onKeyDown={this.onSubmit.bind(this)} />
             <ul className='todolist'>
               {this.props.todos.map(task => (
                 <li key={task.id}
                      className='todoitem'
                      onClick={this.toggleClick(task.id).bind(this)}>
                   {task.isDone ? (<strike>{task.text}</strike>) : (<span>{task.text}</span>)}
                 </li>
               ))}
             </ul>
           </div>
        );
    }
}

function mapStateToProps(state) {
  return { todos: state };
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: text => dispatch(addTodo(text)),
    toggleTodo: id => dispatch(toggleTodo(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);

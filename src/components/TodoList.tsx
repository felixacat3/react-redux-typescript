import React from 'react'
import PropTypes from 'prop-types'
import Todo from './Todo'
import { ITodo } from '../types'

interface ITodoListProps {
    todos: ITodo[];
    toggleTodo: (id:number)=>void;
}

const TodoList: React.FunctionComponent<ITodoListProps> = ({todos, toggleTodo}) => (
    <ul>
        {todos.map(todo => (<Todo key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)}></Todo>) )}
    </ul>
)

TodoList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
      }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
  }
  
  export default TodoList
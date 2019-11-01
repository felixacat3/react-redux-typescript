import React from 'react';
import PropTypes from 'prop-types';

interface ITodoProps {
    completed: boolean;
    text: string;
    onClick: (event: React.MouseEvent<HTMLLIElement>) => void;
}

const Todo: React.FunctionComponent<ITodoProps> = ({ onClick, completed, text }) => (
    <li
        onClick={onClick}
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
    >
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
};

export default Todo;
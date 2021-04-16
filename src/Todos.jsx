const Todos = props => {
    const todos = props.todos;
    const toggle = props._toggle;
    const deleteTodo = props._deleteTodo

    return (
        <ul>
            {todos.map(todo => {
                return (
                    <li
                        onClick={() => toggle(todo)}
                        className={todo.completed ? "checked" : ""}
                        key={todo.item}
                    >
                        {todo.title}
                        <div className='close' onClick={deleteTodo}>X</div>
                    </li>
                );
            })}
        </ul>
    );
};

export default Todos

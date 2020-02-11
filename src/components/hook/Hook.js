import React, {useState} from 'react';

function Todo({todo, index, completeTodo, deleteTodo}){
    return (
        <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">{todo.text}<div>
            <button onClick={()=> completeTodo(index)}>Complete</button>
            <button onClick={()=> deleteTodo(index)}>Delete</button>
        </div></div>
    );
};

function TodoForm({addTodo}){
    const [value, setValue] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        if(!value) return;
        addTodo(value);
        setValue('');
    };
    return <form onSubmit={handleSubmit}>
        <input type="text" className="input" value={value} onChange={e => setValue(e.target.value)}/>
    </form>
}

function Hook() {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about react',
            isCompleted: false
        },
        {
            text: 'homework',
            isCompleted: false
        },
        {
            text: 'girlfriend stuff',
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="hook">
            <div className="todo-list">
                {todos.map((todo, index) => (
                    <Todo
                        key={index}
                        index={index}
                        todo={todo}
                        completeTodo={completeTodo}
                        deleteTodo={deleteTodo}/>
                ))}
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    )
}

export default Hook;
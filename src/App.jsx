import React from "react";
import Form from "./Form";
import Todos from "./Todos";
import "./App.css";

const todos = [
    {
        id: 1,
        title: "Levar o cachorro pra passear",
        completed: false,
    },
    {
        id: 2,
        title: "Lavar Louça",
        completed: false,
    },
    {
        id: 3,
        title: "Alimentar o gato",
        completed: false,
    },
    {
        id: 4,
        title: "Estudar para a prova de sexta",
        completed: true,
    },
];

class App extends React.Component {
    //Memoria local do component
    state = {
        input: "",
        todos: [],
    };

    componentDidMount() {
        this.setState({ todos: todos });
    }

    _onChange = evt => {
        const value = evt.target.value;
        this.setState({ input: value });
    };

    // onCLick
    _onClick = () => {
        const oldTodos = this.state.todos;
        const finalInput = this.state.input;

        const newTodo = {
            id: oldTodos.lenght,
            title: finalInput,
            completed: false,
        };

        // Se nao input esta vazio, imprimir alerta e sair do onclick
        if (finalInput === "") {
            alert("please, type something");
            return;
        }

        // pegar a list de "todos antiga"
        // adicionar novo item
        this.setState({ todos: [newTodo, ...oldTodos], input: "" });
    };

    _toggle = todo => {
        console.log("hello", todo);
        const oldTodos = this.state.todos;

        const newTodos = oldTodos.map(item => {
            if (item.id === todo.id) {
                item.completed = !item.completed;
                return todo;
            } else {
                return item;
            }
        });

        this.setState({ todos: newTodos });
    };

    _deleteTodo = evt => {
        evt.stopPropagation();
        console.log("Remove item");
    };

    // Funçao que retorna o component em HTML/JSX
    render() {
        return (
            <div className='App'>
                <h1 className='Title'>Lista de Tarefas</h1>

                {/* Input field pra dicionar tarefa */}
                <Form
                    input={this.state.input}
                    _onChange={this._onChange}
                    _onClick={this._onClick}
                />

                {/* Unordered List */}
                <Todos
                    todos={this.state.todos}
                    _toggle={this._toggle}
                    _deleteTodo={this._deleteTodo}
                />
            </div>
        );
    }
}

export default App;

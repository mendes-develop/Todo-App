import React from "react";
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
    state = {};

    // Funçao que retorna o component em HTML/JSX
    render() {
        return (
            <div className='App'>
                <h1 className='Title'>Lista de Tarefas</h1>

                {/* Input field pra dicionar tarefa */}
                <div className='Form'>
                    <input className='InputItem' type='text' />
                    <button className='AddButton'>Adicionar</button>
                </div>

                {/* Unordered List */}
                <ul>
                    <li>
                        {todos[0].title}
                        <div className='close'>X</div>
                    </li>
                </ul>

            </div>
        );
    }
}

export default App;

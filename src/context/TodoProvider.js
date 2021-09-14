import React, { useMemo, useState, useEffect } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {

    const [todos, saveTodos] = useLocalStorage('TODOS_V1', []);

    const [searchValue, setSearchValue] = useState('');

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;

    const filteredText = useMemo(() =>
        todos.filter((todo) => {
            return todo.text.toLowerCase().includes(searchValue.toLowerCase())
        }), [todos, searchValue]
    )



    const toggleTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos[todoIndex].completed = !todos[todoIndex].completed;
        saveTodos(newTodos);
    }

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
    }

    console.log('render antes del useeffect');
    useEffect(() => {
        console.log('use efect')
        return () => {
            console.log('return useeffect')
        }
    }, [totalTodos])
    console.log('render despues del useeffect');


    return (
        <TodoContext.Provider value={{
            totalTodos,
            completedTodos,
            searchValue,
            setSearchValue,
            filteredText,
            toggleTodo,
            deleteTodo,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoProvider, TodoContext }

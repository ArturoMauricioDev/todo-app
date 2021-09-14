import React from "react"
import { TodoProvider } from "./context/TodoProvider";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de introducción a react', completed: false },
//   { text: 'Preparar', completed: false },
// ]

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

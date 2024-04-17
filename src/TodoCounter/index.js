import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter(){
  
  const {totalTodos, completedTodos} = React.useContext(TodoContext);

  return (
    totalTodos === completedTodos
      ?
      <h1 className='TodoCounter'>
        Felicidades has termiando tus tareas!
      </h1>
      :
      <h1 className='TodoCounter'>
        Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span>
      </h1>
  )
}

export {TodoCounter};



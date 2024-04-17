import React from "react";
import './TodoForm.css'
import { TodoContext } from "../TodoContext";

function TodoForm(){
  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  

  const onCancel = (e) => {
    setOpenModal(false);
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea 
        placeholder="Saltar cuerda"
        value={newTodoValue}
        onChange={onChange}
        required
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
        >Cancelar</button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >Añadir</button>
      </div>

    </form>
  )
}

export {TodoForm}
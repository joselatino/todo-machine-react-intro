import './CreateTodoButton.css';
function CreateTodoButton({setOpenModal}){


  return (
    <button className="CreateTodoButton" 
      onClick={
        (e)=> {
         setOpenModal(state => !state)
        }
      }
    >+</button>
  )
}

export {CreateTodoButton}
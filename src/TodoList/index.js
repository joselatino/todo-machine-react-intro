import './TodoList.css'

function TodoList({children}){
  return (
    <ul className='TodoList'>
      {/* {props.children} */}
      {children}
    </ul>
  )
}

export {TodoList}
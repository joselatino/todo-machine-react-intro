import React from "react";

/* 
const defaultTodos = [
  {text: 'Ejercicios muñeca', completed: false},
  {text: 'Como botar las cuchillas', completed: false},
  {text: 'Barrer el cuarto', completed: true},
  {text: 'Ejercicios Kegel', completed: false},
  {text: 'Usar estados derivados', completed: true},
] 

localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));

localStorage.removeItem('TODOS_V1');
*/

function useLocalStorage(itemName, initialValue){

  const [item, setItem] = React.useState(initialValue)
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  
  React.useEffect(()=> {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
      let parsedItems;
      if(!localStorageItem) {
        localStorage.setItem(itemName,JSON.stringify(initialValue));
        parsedItems = initialValue;
      }else{
        parsedItems = JSON.parse(localStorageItem);
        setItem(parsedItems);
      }
  
      setLoading(false);
  
      } catch (error) {
        setLoading(false);
        setError(true)
      }
    }, 2000);
  }, [])

  const saveItem = (newItem) => {
    localStorage.setItem('TODOS_V1', JSON.stringify(newItem));
    setItem(newItem) 
  }
  console.log(item);

  return {
    item,
    saveItem, 
    loading, 
    error
  };

}

export {useLocalStorage}
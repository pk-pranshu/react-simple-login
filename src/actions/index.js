const uid = () => Math.random().toString(34).slice(2); //generate a random id

//handle an add Todo action
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text
    }
  };
}

//handle an complete Todo action
export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  }
}

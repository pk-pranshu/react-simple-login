import { List } from 'immutable';

const init = List([ { id: 0, isDone: true,  text: 'complete design doc' },
                    { id: 1, isDone: false, text: 'attend cloud team demo' },
                    { id: 2, isDone: false, text: 'update redux files' },
                    { id: 3, isDone: false, text: 'write unit tests' }]);

export default function task(todos=init, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return todos.push(action.payload);
    case 'TOGGLE_TODO':
      return todos.map(task => {
        if((task.id) === action.payload) {
            task.isDone = !task.isDone
            return task;
        } else {
          return task;
        }
      });
    default:
      return todos;
  }
}

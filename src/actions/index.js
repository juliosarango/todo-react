import { todosRef } from '../config/firebase'
import { FETCH_TODOS } from './types'

export const addToDo = newToDo => async dispath => {
  todosRef.push().set(newToDo);
}

export const completeToDo = completeToDoId => async dispath => {
  todosRef.child(completeToDoId).remove();
}

export const fetchToDos = () => async dispath => {
  todosRef.on("value", snapshot => {
    dispath({
      type: FETCH_TODOS,
      payload: snapshot.val()
    })
  })
}

import { ADD, REMOVE} from './actionTypes'

export function addComment(id, name)  {
  return {
    type: ADD,
    id: id++, 
    name 
  }
}

export function removeComment(id) {
  return {
    type: REMOVE,
    id
  }
}

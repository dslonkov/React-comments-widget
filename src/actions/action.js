import { ADD, REMOVE} from './actionTypes'

export function addComment(id, name)  {
  return {
    type: ADD,
    id: id++, // тут тоже хуйня
    name // - тут хуйня полюбому, еще комент нужен
  }
}

export function removeComment(id) {
  return {
    type: REMOVE,
    id
  }
}

import { format } from 'date-fns'
import {ADD, REMOVE} from '../actions/actionTypes'

const initialState = {
  comments: [],
  form: []
};

const commentReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
       return {
         comments: [
           ...state.comments,
           {
             id: action.id,
             name: action.name,
             comment: action.comment,
             date: format(new Date(), 'dd/MM/yyyy')
           }
          ],
           form: {...state.form}
       }

    case REMOVE:
      return {
        comments: state.filter((id) => id !== action.id)
        }

    default:
      return state;
  }
}

export default commentReducer
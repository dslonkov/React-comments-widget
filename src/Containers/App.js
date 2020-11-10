import React, {Component} from 'react'
import CommentForm from '../Components/form'
import CommentList from '../Components/commentList'

class App extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <div className='wrapper'>
        <CommentForm/>
        <CommentList/>
      </div>
    )
  }
}

export default App
           
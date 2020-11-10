import React from 'react'
import { connect } from 'react-redux';
import {addComment} from '../actions/action'



class CommentForm extends React.Component {
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
  
  handleChange(event) {
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.dispatch(addComment())
  }

  render() {
    return (
      <form>
        <label className='labelName'>
          Name:
          <input
            type='text'
            name='name'
            value={this.props.name}
            onChange={this.handleChange}
          />
        </label>

        <label className='labelComment'>
          Comment:
          <input
            type='textarea'
            name='comment'
            value={this.props.comment}
            onChange={this.handleChange}
          />
        </label>

        <button onClick={this.handleSubmit}>
          Добавить комментарий
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    form: state.form,
  };
}


export default connect(mapStateToProps)(CommentForm);
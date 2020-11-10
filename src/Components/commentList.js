import React from 'react'
import CommentItem from './commentItem'
import { connect } from 'react-redux';

function CommentList(props) {
  return(
    <ol className='commentList'>
      {
        props.comments.map((comment,index) => {
          return <CommentItem
                    comments={comment}
                    name={comment.name}
                    comment={comment.comment}
                    date={comment.date}
                    id={comment.id}
                    key={index}
                    removeComment={props.removeComment}
                  />
        })
      } 
    </ol>
  )
}

function mapStateToProps(state) {
  return {
    comments: state.comments,
    form: state.form,
  };
}


export default connect(mapStateToProps)(CommentList);
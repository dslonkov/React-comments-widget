import React from 'react'

export default function CommentItem(props) {
  return(
    <li className="commentItem">{props.name}: {props.comment}
      <span className='date'>{props.date}</span>
      <button className='deleteBtn'>&times;</button>
    </li>
  )
}
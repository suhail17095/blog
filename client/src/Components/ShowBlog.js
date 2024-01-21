import React from 'react'

function ShowBlog(props) {
  return (
    <div className='container show-container'>
        <h1 className='h-blog'>{props.curblog.title}</h1>
        <p className='shadow p-blog'>
            {props.curblog.content}
        </p>
    </div>
  )
}

export default ShowBlog
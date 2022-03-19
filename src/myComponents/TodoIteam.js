import React from 'react'

export default function TodoIteam({ todo, onDelete }) {
  return (
    <div className="container">
        <h4>{todo.title}</h4>
        <p>{todo.Desc}</p>
        <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
    </div>
  )
}


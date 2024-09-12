import React from 'react'
import './style.css'

export default function Card({
    title,
    count,
}) {
  return (
    <div class='card-container'>
        <h4>{title}</h4>
        <h1>{count}</h1>
    </div>
  )
}

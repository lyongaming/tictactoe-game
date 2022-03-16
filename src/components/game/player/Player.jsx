import React from 'react'

export const Player = ({ children: name }) => {
  return (
    <aside className="game__player">
      <div>{ name }</div>
    </aside>
  )
}

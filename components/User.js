import React from 'react'

export default function User({user}) {
  return (
    <div>
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
    </div>
  )
}

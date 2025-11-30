import  { useState } from 'react'

const Read = (props) => {
   
  const renderData = props.users.map((user, id) => {
    return (
      <li key={id}>
        Name: {user.name} and Age: {user.age}
      </li>
    );
  });

  return (
    <>
        <h1>User Data</h1>
        <ol>{renderData}</ol>
    </>
  )
}

export default Read
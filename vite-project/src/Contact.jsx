import React from 'react'

const Contact = () => {
  let count = 0;
  for(let i=0;i<10000000000;i++){
      count += i;
  }
  return (
    <div>
      <h3>My Contact page</h3>
      <h4>Count is --- {count}</h4>
    </div>
  )
}

export default Contact

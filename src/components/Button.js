import React from 'react'
//destructure name here
const Button = ({name}) => {
  return (
    //Will use name here--This is the way of receiving props
    <div className='px-5 py-2 m-2 bg-gray-200 rounded-lg'>
      {name}
    </div>
  )
}

export default Button;

import React from 'react'
import Button from './Button';
const ButtonList = () => {
  return (
    <div className='flex'>
    <Button name="All"/>
    <Button name="Live"/>
      <Button name="Music"/>
      <Button name="Cooking"/>
      <Button name="Cricket"/>
      <Button name="Soccer"/>
      <Button name="News"/>
      <Button name="Songs"/>
      <Button name="Entertainment"/>
      
    </div>
  )
}

export default ButtonList;

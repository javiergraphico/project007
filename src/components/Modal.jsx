import React from 'react'
import './modal.scss'

export const Modal = ( {isOpen, onClose} ) => {
  return (
    <div className='modal-container ' style={{display: isOpen ? 'grid' : 'none'}}>
      <div className='modal-body col-6 '>
        <button className='modal-close' onClick={onClose}>x</button>
        <p className='px-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum illum reprehenderit ducimus ipsam laborum laboriosam modi id placeat tempora animi eveniet nesciunt suscipit ad est, facilis odit aspernatur dolores dolore.</p>
      </div>
    </div>
  )
}

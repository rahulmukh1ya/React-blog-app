import React from 'react'
import { createPortal } from 'react-dom'

const Modal = ({ heading,content,footer,isShowing, hide}) => {
  if(!isShowing) return false //return null
  const DOMcontainer = document.getElementById('modal-root')
    return (
      createPortal(
      <>
        <div className="modal-overlay" />
        <div className="modal-container">
          <div className="modal">
            <h1>{heading}</h1>
            <div>{content}</div>
            <div>{footer}</div>
            <div onClick={hide}>Close Me</div>
          </div>
        </div>
      </>
      , DOMcontainer)
      
    )
}

export default Modal
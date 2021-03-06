import React from 'react'
import './Loader.css';

const Loader = ({display}) => {
  return (
      <div style={{display}} className="loader-container">
          <div className="loader">
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    
  )
}

export default Loader
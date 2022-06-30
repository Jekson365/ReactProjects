import React from 'react'

export const Slide = (props) => {
  return (
      <>
          <div className='main-container'>
              <div className='image-place'>
                  <img src={props.list.poster}/>
              </div>
              <div className='title'>
                  <p>{props.list.name}</p>
              </div>
          </div>
    </>
  )
}

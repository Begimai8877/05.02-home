import React from 'react'

const Card = ({name, climate}) => {
  return (
    <div className='section__card'>
      <p className='name'>
        {name}
      </p>
      <p className='climate'>
        {climate}
      </p>
    </div>
  )
}

export default Card
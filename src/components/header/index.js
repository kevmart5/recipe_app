import React from 'react'

const Header = (props) => {
  console.log('props: ', props)
  return  <div>{`Hi ${props.name}  ${props.surName}, ${props.dob}`}</div>
}

export default Header
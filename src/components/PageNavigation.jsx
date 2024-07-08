import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const PageNavigation = ({title}) => {
  return (
    <Wrapper>
    <div >
        <NavLink to="/">Home</NavLink>/{title}
    </div>
    </Wrapper>
  )
}
const Wrapper= styled.section`
font-size: 2.4rem;
font-weight: bold;
margin-top:1.5rem;
padding:0 2rem;
a{
  text-decoration:none;
}
`

export default PageNavigation
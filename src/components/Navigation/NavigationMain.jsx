import React from 'react'

//components 
import NavigationTop from './NavigationTop'
//styles and icons
import {NavContainer} from '../../Styles/Navigation/NavContainer.styled'


const NavigationMain = () => {
  return (
    <NavContainer className="nav">
        <NavigationTop 
            classes={'nav__top'}
        />
        <div className='nav__main'>Nav Bottom</div>
    </NavContainer>
  )
}

export default NavigationMain
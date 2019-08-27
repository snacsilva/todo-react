import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
  
  return ( 
    <div>
      <Navbar>
        <Navbar.Brand>
          <FontAwesomeIcon icon="check-circle" size="lg"/> Task Finisher
        </Navbar.Brand>
      </Navbar>
    </div>
  )
}

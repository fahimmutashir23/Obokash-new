import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { CiLocationOn } from "react-icons/ci";
const ContactCard = (props) => {
  return (
    <div className='my-5'>
        <div className='text-center shadow p-5 rounded borderDesign'>
          <div className='contact_card--icon'>
              <h1>{props.loc}</h1>
          </div>
            <h1>{props.name}</h1>
            <h5>{props.des}</h5>
        </div>
    </div>
  )
}

export default ContactCard
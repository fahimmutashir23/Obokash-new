import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import UmraHomePageCard from './UmraHomePageCard'
import UmrahhomePageCardTwo from './UmrahhomePageCardTwo'

const Umrahpackage = () => {
  return (
    <Container>
        <div>
            <h1 className='text-center my-5'>Umrah Packages From Bangladesh</h1>
            <p className=''>Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh, our team will help you from the beginning including all the paper works and our highly Religious trainers will guide and train you for the Umrah. Obokash.com also has Ramadan Umrah package from Bangladesh for those who seek to perform it during Ramadan month of this year. Although the rush for Umrah during Ramadan is quite high, we make sure that you will get the best accommodation and facilities during this rush hour</p>
        </div>
        <Row className='mt-5'>
            <Col md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-3'md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-3' md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-3' md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>

            <div className='m-auto text-center my-5'>
                <Button className='viewAllButton'>VIEW ALL</Button>
            </div>
        </Row>
    </Container>
  )
}

export default Umrahpackage
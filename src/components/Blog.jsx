import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <Container>
        <div>
            <h1 className='text-center my-5'>Our All Packages Blog</h1>
            <p className='mb-4'>Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh, our team will help you from the beginning including all the paper works and our highly Religious trainers will guide and train you for the Umrah. Obokash.com also has Ramadan Umrah package from Bangladesh for those who seek to perform it during Ramadan month of this year. Although the rush for Umrah during Ramadan is quite high, we make sure that you will get the best accommodation and facilities during this rush hour</p>
        </div>
        <Row>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
            <Col className='my-3' md="6" lg="6">
                <BlogCard title="OUR BEST UMRAH PACKAGE" des="Obokash travel agency brings the Most Comfortable and Affordable VIP Umrah Package 2024 from Bangladesh with the experienced religious tour guide to allow smooth and perfect journey without any trouble. As a most experienced Umrah operator in Bangladesh"/>
            </Col>
        </Row>
    </Container>
  )
}

export default Blog
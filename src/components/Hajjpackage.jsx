import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UmrahhomePageCardTwo from "./UmrahhomePageCardTwo";
import UmraHomePageCard from "./UmraHomePageCard";

const Hajjpackage = () => {
  return (
    <div className="hajj__bg--img">
      <Container className="my-5">
        <Row>
          <div className="holidayContent">
            <h1 className="text-center text-white py-4">
            Hajjpackage
            </h1>
            <p className="text-center text-white">
            Are you planning to embark on the sacred journey of Hajj from Bangladesh? Look no further! Our comprehensive Hajj package is designed to provide you with a life-changing spiritual experience, expert guidance, comfortable accommodations, and seamless transportation. You will get all details about the different Hajj package durations and prices,the reasons why you should choose our Hajj package, the highlights of the itinerary, the preparation and requirements, safety measures, booking and reservations, and address frequently asked questions. Join us on this extraordinary pilgrimage and make your journey of a lifetime truly unforgettable.
            </p>

            <h4 className="text-center text-white py-4">Here are some of the Top and Cheap Packages for you during the Hajj</h4>
          </div>
          <Col md="6" lg="4">
            <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col md="6" lg="4">
            <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col md="6" lg="4">
            <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hajjpackage;

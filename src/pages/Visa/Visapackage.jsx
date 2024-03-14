import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VisaPackage from "../../components/VisaPackage";
import "./visa.css";
import UmraHomePageCard from "../../components/UmraHomePageCard";
import UmrahhomePageCardTwo from "../../components/UmrahhomePageCardTwo";
const Visapackage = () => {
  return (
    <Container>
      <Row>
        <Col md="6 m-auto">
          <VisaPackage />
        </Col>
        <Col className="visaCardScroll" md="6 m-auto">
          <div className="holidayContent">
              <h1 className="text-center py-4">
                Our All International Packages From Bangladesh
              </h1>
            </div>
          <Row>
            <Col md="6">
              <UmraHomePageCard />
            </Col>
            <Col md="6">
              <UmraHomePageCard />
            </Col>
            <Col className="mt-2" md="6">
              <UmraHomePageCard />
            </Col>
            <Col className="mt-2" md="6">
              <UmrahhomePageCardTwo />
            </Col>
            <Col className="mt-2" md="6">
              <UmrahhomePageCardTwo />
            </Col>
            <Col className="mt-2" md="6">
              <UmrahhomePageCardTwo />
            </Col>
            <Col className="mt-2" md="6">
              <UmrahhomePageCardTwo />
            </Col>
            <Col className="mt-2" md="6">
              <UmraHomePageCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Visapackage;

import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UmrahhomePageCardTwo from "./UmrahhomePageCardTwo";

const HolidayPackage = () => {
  return (
    <div className="holiday__bg--img">
      <Container className="my-5">
        <Row>
          <div className="holidayContent">
            <h1 className="text-center text-white py-4">
              Cheap International Holiday Packages From Bangladesh
            </h1>
            <p className="text-center text-white">
              Thinking of taking a break from every day's busy life? Planning to
              go out of the country with your loved ones to have some fun and
              quality time in a cost-effective way? Obokash travel agency
              introduces you to their cheap and budget-friendly international
              holiday packages from Bangladesh just for your benefit and
              refreshment. Our packages are very much cost effective putting no
              pressure on your budget and giving you the best facilities that
              will leave you mind-blown. Our packages give you nothing but the
              best accommodation in the country’s finest hotels and resorts and
              mouth-watering delicious foods that taste like little drops of
              heaven. Our experienced guide will take you to the different and
              famous places in the country you wish to travel as well. All you
              have to do is sit back and relax while enjoying the Mother
              Nature’s view with a glass of your favorite drink in your hand.
            </p>
          </div>
          <Col md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col className="mt-2" md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col className="mt-2"md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
          <Col className="mt-2"md="6" lg="4">
            <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HolidayPackage;

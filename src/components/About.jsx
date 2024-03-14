import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <Container className="my-5">
      <Row>
        <Col md="6">
          <div>
            <h2>
              ABOUT <span>OBOKASH</span> TRAVEL AGENCY
            </h2>
          </div>
          <p className="textJustify mb-4">
            obokash is a trusted and reliable tour and travel agency among all
            the leading and updated tour-operating services in Bangladesh. We
            are here to bring the luxury to your traveling. obokash is a proud
            member of Association of Travel Agents of Bangladesh-ATAB and Tour
            Operators Association of Bangladesh. Safe traveling, your security,
            and your enjoyment are our focus during your travels. Our
            experienced and expert traveling guides ensure that you do not need
            to move an inch from your comfort zone and make sure that you always
            have a beautiful satisfactory smile on your face. We believe that
            your smile is our success and obokash will do anything to keep you
            smiling.
          </p>

          <p className="textJustify mb-4">
            By the Grace of Almighty Allah, we are very pleased to say that the
            Umrah service is the most successful program from oboskash Being
            honest and fair is our main motive towards our customer and
            therefore we deliver you the best services during the Umrah. We know
            how important this ritual is for the Muslims and thus obokash has
            come up with different Umrah packages from Bangladesh. Each of our
            packages is designed for you so that you can pick it according to
            your desired budget to enjoy and be satisfied with our services. Our
            experienced trainers will guide you to the end and see any of your
            matter. We also have a Hajj program that
          </p>
        </Col>

        <Col className="" md="6">
          <iframe
            src="https://www.youtube.com/embed/RRT3Fz7SRKw"
            title="Youtube video"
            allowFullScreen
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
};

export default About;

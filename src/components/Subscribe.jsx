import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Subscribe = () => {
  return (
    <div className="subscribe__img">
      <Container>
        <Row className="shadow my-5 rounded py-5">
          <h1 className="text-center">SUBSCRIBE OUR NEWSLETTER</h1>
          <h4 className="text-center">
            SUBSCIBE TO RECEIVE OUR INTERESTING UPDATES
          </h4>
          <Col className="d-flex m-auto" md="8">
            <div className="d-flex w-100">
              <Form className="d-flex m-auto text-center">
                <Form.Group
                  className="mb-3 finput"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
              </Form>
            </div>
            <div className="">
              <Button className="mx-3 sButton">SUBSCRIBE NOW</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Subscribe;

import React, { useState } from "react";
import { Button, Col, Container, Form, Row, Tab, Tabs } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import "react-datepicker/dist/react-datepicker.css";

const Banner = () => {
  const [selected1, setSelected1] = useState("");
  const [selected2, setSelected2] = useState("");

  return (
    <div className="banner__bg--img">
      <Container>
        <Row className="Banner__search--box">
          <Col
            className="banner__search--content shadow py-4 px-2 rounded m-auto"
            md="8"
          >
            <h3 className="text-center py-4">
              SELECT YOUR TOUR AND TRAVELS PACKAGE
            </h3>
            <Tabs
              defaultActiveKey="TOUR"
              id="justify-tab-example"
              className="xx mb-3"
              justify
            >
              <Tab eventKey="TOUR" title="TOUR">
                <Form>
                  <h6>WHERE DO YOU WANT TO GO?</h6>
                  <ReactFlagsSelect
                    selected={selected1}
                    onSelect={(code) => setSelected1(code)}
                    searchable
                  />

                  <h6 className="mt-5">YOUR NATIONALITY</h6>
                  <ReactFlagsSelect
                    selected={selected2}
                    onSelect={(code) => setSelected2(code)}
                    searchable
                  />
                </Form>
                <div className="d-flex tourForm py-3">
                  <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
                    <Form.Label>CONTACT NUMBER</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" />
                  </Form.Group>

                  <Form.Group
                    className="mb-3 w-50 mx-1"
                    controlId="formBasicEmail"
                  >
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                </div>
                <Button className="search__button mt-3">Search</Button>
              </Tab>

              <Tab eventKey="VISA" title="VISA">
                <Form>
                  <h6>WHERE DO YOU WANT TO GO?</h6>
                  <ReactFlagsSelect
                    selected={selected1}
                    onSelect={(code) => setSelected1(code)}
                    searchable
                  />

                  <h6 className="mt-5">YOUR NATIONALITY</h6>
                  <ReactFlagsSelect
                    selected={selected2}
                    onSelect={(code) => setSelected2(code)}
                    searchable
                  />
                </Form>
                <Button className="search__button mt-3">Search</Button>
              </Tab>
              <Tab eventKey="HOTEL" title="HOTEL">
                <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>WHERE DO YOU WANT TO GO?</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Pleace" />
                  </Form.Group>
                  <div className="d-flex tourForm py-3">
                    <Form.Group
                      className="mb-3 w-50"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>CHECK IN</Form.Label>
                      <br />
                      <Form.Control type="date" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 w-50 mx-1"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>CHECK OUT</Form.Label>
                      <br />
                      <Form.Control type="date" />
                    </Form.Group>
                  </div>
                  <div className="d-flex tourForm py-3">
                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>ROOM</Form.Label>
                      <br />
                      <Form.Select aria-label="Default select example">
                        <option>SELECT YOUR ROOME</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>ADULT (12+ YRS)</Form.Label>
                      <br />
                      <Form.Select aria-label="Default select example">
                        <option>SELECT ADULT PERSON</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>CHILD (2-11 YRS)</Form.Label>
                      <br />
                      <Form.Select aria-label="Default select example">
                        <option>SELECT CLILD PERSON</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </Form.Select>
                    </Form.Group>
                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>INFANT (0-2 YRS)</Form.Label>
                      <br />
                      <Form.Select aria-label="Default select example">
                        <option>SELECT PERSON</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="3">4</option>
                        <option value="3">5</option>
                      </Form.Select>
                    </Form.Group>
                  </div>
                  <Form>
                    <h6>RECIDENCE</h6>
                    <ReactFlagsSelect
                      selected={selected1}
                      onSelect={(code) => setSelected1(code)}
                      searchable
                    />

                    <h6 className="mt-1">NATIONALITY</h6>
                    <ReactFlagsSelect
                      selected={selected2}
                      onSelect={(code) => setSelected2(code)}
                      searchable
                    />
                  </Form>
                </Form>
              </Tab>

              <Tab eventKey="FLIGHT" title="FLIGHT">
                <Form>
                  <div className="d-flex tourForm py-3">
                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>FLYING FROM</Form.Label>
                      <br />
                      <Form.Control type="text" placeholder="FLYING FROM" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>FLYING TO</Form.Label>
                      <br />
                      <Form.Control type="text" placeholder="FLYING TO" />
                    </Form.Group>

                    <Form.Group
                      className="mb-3 w-25"
                      controlId="formBasicEmail"
                    >
                      <Form.Label>CHILD (2-11 YRS)</Form.Label>
                      <br />
                      <Form.Control type="date" />
                    </Form.Group>
                  </div>

                  <h6 className="mt-2">SELECT CLASS</h6>
                  <Form.Select className="mb-2" aria-label="Default select example">
                    <option>SELECT CLASS</option>
                    <option value="1">ECONOMY CLASS</option>
                    <option value="2">PREMIUM ECONOMY CLASS</option>
                    <option value="3">BUSINESS CLASS</option>
                  </Form.Select>

                  <h6 className="mt-2">YOUR NATIONALITY</h6>
                  <ReactFlagsSelect
                    selected={selected2}
                    onSelect={(code) => setSelected2(code)}
                    searchable
                  />
                </Form>
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
      <div className="bg__overly">fg</div>
    </div>
  );
};

export default Banner;

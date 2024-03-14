import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import ContactCard from "../../components/ContactCard";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdCallEnd } from "react-icons/md";
const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <h1 className="text-center py-5">CONTACT WITH US</h1>
        <Col md="6">
          <h6>
            Important- It is highly recommended to you that you talk to us about
            your tours and travels. We have our experienced tour experts who
            will guide you with all the valid information that you need to know
            about your tours. You can ask questions and can have a clear idea
            about your tour. Accommodations, foods, visas, pricing of packages,
            all information should be discussed beforehand to avoid any
            misunderstanding in the future. You can reach us through email. Send
            us a mail and we will get back to you right away. Or you can call us
            directly at the given phone number and talk to us. The best way is
            to come to visit us, have a cup of tea and talk to our expert guides
            in person and book your package right away!
          </h6>

          <div className="topHeader__icon--sectontFooter mt-5">
            <div className="topHeader__icon text-whtie">
              <FaFacebookF />
            </div>
            <div className="topHeader__icon text-whtie">
              <FaTwitter />
            </div>
            <div className="topHeader__icon text-whtie">
              <FaLinkedin />
            </div>
            <div className="topHeader__icon text-whtie">
              <FaYoutube />
            </div>
            <div className="topHeader__icon text-whtie">
              <FaPinterest />
            </div>
            <div className="topHeader__icon text-whtie">
              <FaInstagramSquare />
            </div>
          </div>
        </Col>
        <Col className="contactSection shadow p-5" md="6">
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>EMAIL</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>NAME</Form.Label>
              <Form.Control type="text" placeholder="Enter Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>CONTACT</Form.Label>
              <Form.Control type="number" placeholder="Enter Phone Number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>SUBJECT</Form.Label>
              <Form.Control type="text" placeholder="SUBJECT" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
          <Button className="contact__btn">SEND</Button>
        </Col>
      </Row>

      <Row>
        <Col className="" md="6" lg="4">
          <ContactCard name="Find us at" des="Bashati Condominium (Floor 10/D), House # 15, Road # 17, Banani, Dhaka - 1213, Bangladesh" loc={<CiLocationOn/>}></ContactCard>
        </Col>
        <Col className="" md="6" lg="4">
          <ContactCard name="Email us at" des="ask@obokash.com ask@obokash.com" loc={<MdOutlineEmail />} ></ContactCard>
        </Col>
        <Col className="" md="6" lg="4">
          <ContactCard name="Call us at" des="09648700700 09648700700" loc={<MdCallEnd />}></ContactCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

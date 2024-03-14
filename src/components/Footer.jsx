import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer__bg">
      <Container>
        <Row>
          <Col md="6" lg="4">
            <h2 className="text-white">QUICK MENU</h2>
            <ul>
              <li>COMPANY OVERVIEW</li>
              <li>MESSAGE FROM CEO</li>
              <li>UMRAH PACKAGES</li>
              <li>HAJJ PACKAGES</li>
              <li>HAJJ PACKAGES</li>
              <li>TOUR PACKAGES</li>
              <li>BLOG</li>
            </ul>
          </Col>
          <Col md="6" lg="4">
            <h2 className="text-white">CONTACT WITH US</h2>
            <ul>
              <li>
                Bashati Condominium (Floor 10/D), House # 15, Road # 17, Banani,
                Dhaka - 1213, Bangladesh
              </li>
              <li>GET DIRECTION ON GOOGLE MAP</li>
              <li>+88-09648700700</li>
              <li>ask@obokash.com,</li>
              <li>obokash.net@gmail.com</li>
            </ul>
            <div className="FOOTER__ICON">
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
          <Col md="6" lg="4">
            <h2 className="text-white">ABOUT US</h2>
            <p className="text-white">
              obokash is a trusted and reliable tour and travel agency among all
              the leading and updated tour-operating services in Bangladesh. We
              are here to bring the luxury to your traveling. obokash is a proud
              member of Association of Travel Agents of Bangladesh-ATAB and Tour
              Operators Association of Bangladesh. Safe traveling, your
              security, and your enjoyment are our focus during your travels.
              Our experienced and expert traveling guides ensure that you do not
              need to move an inch from your comfort zone and make sure that you
              always have a beautiful satisfactory smile on your face. We
              believe that your .
            </p>
          </Col>
          <p className="text-center text-white mt-5">
            @ DEVELOPED BY WB-SOFTWEER
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;

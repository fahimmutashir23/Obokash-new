import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
const TopHeader = () => {
  return (
    <div className="bg-dark">
      <Container>
        <Row>
          <Col className="topHeader__content text-white" md="6">
            <div>
              <p className="topHeader__content--email">
                ask@obokash.com, obokash.net@gmail.com
              </p>
            </div>
            <div>
              <p className="topHeader__content--phoneNumber">+88-09648700700</p>
            </div>
          </Col>
          <Col md="6">
            <div className="topHeader__icon--sectont">
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
        </Row>
      </Container>
    </div>
  );
};

export default TopHeader;

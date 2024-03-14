import { Button, Col, Container, Row } from "react-bootstrap";

const VisaProcessing = () => {
  return (
    <Container className="py-5">
      <div>
        <h1 className="text-center">Visa Processing Services</h1>
        <p className="py-4">
        Obokash Travel can be your reliable visa processing agent in Bangladesh. Development of modern technology and IT infrastructure, the world become a global village and all our neighbors. Travelling and migration from a country to another is a very easy and quick process for a variety of purposes like study, treatment, business, skilled migration, etc.

        Obokash Travel is the best visa processing agency in Bangladesh for multiple purposes like touring and traveling, business, treatment, etc. The visa processing services BD is also at the top of the Umrah Hajj visa processing. With long experience in this field, we are now the number one visa agent in Dhaka.
        </p>
      </div>
      <Row>
        <Col md="6" lg="3" className="cuntryflag">
            <div className="flag">
                <img className="img-fluid" src="image/aus.jpg"/>
                <div className="flag__name text-white text-center"><h3>Australia</h3></div>
            </div>
        </Col>
        <Col md="6" lg="3" className="cuntryflag">
            <div className="flag">
                <img className="img-fluid" src="image/malaysiaFlag.jpg"/>
                <div className="flag__name text-white text-center"><h3>Malaysia</h3></div>
            </div>
        </Col>
        <Col md="6" lg="3" className="cuntryflag">
            <div className="flag">
                <img className="img-fluid" src="image/thai2.jpg"/>
                <div className="flag__name text-white text-center"><h3>Thailand</h3></div>
            </div>
        </Col>
        <Col md="6" lg="3" className="cuntryflag">
            <div className="flag">
                <img className="img-fluid" src="image/uk.png"/>
                <div className="flag__name text-white text-center"><h3>Australia</h3></div>
            </div>
        </Col>

        <div className='m-auto text-center my-5'>
            <Button className='viewAllButton'>VIEW ALL</Button>
        </div>
      </Row>
    </Container>
  );
};

export default VisaProcessing;

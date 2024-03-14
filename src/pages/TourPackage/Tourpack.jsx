import {Col, Container, Row } from "react-bootstrap";
import UmraHomePageCard from "../../components/UmraHomePageCard";
import UmrahhomePageCardTwo from "../../components/UmrahhomePageCardTwo";
const Tourpack = () => {
  
  return (
    <div>
      <Container className="my-4">
        <div className="w-100 m-auto py-5">
          <h1 className="text-center ">
            International tour packages from Bangladesh
          </h1>
        </div>
        <Row>
            <Col md="6" lg="4">
                <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col md="6" lg="4">
                <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col md="6" lg="4">
                <UmrahhomePageCardTwo title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-2' md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-2' md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            <Col className='mt-2' md="6" lg="4">
                <UmraHomePageCard title="First Ramadan Umrah Package" des="START FROM BDT 1,60,000/ PER PERSON"/>
            </Col>
            
        </Row>
        <Row></Row>
      </Container>
    </div>
  );
};

export default Tourpack;

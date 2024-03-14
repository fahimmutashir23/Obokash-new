import React from "react";
import { Card } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

const UmrahhomePageCardTwo = (props) => {
  return (
    <div>
      <Card className="shadow" style={{ width: "auto" }}>
        <Card.Img variant="top" src="image/hajj11.jpg" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text className="card__des">{props.des}</Card.Text>
          <div className="card__package--name">
            <p>Umrah</p>
          </div>
          <div className="card__package--nametwo d-flex">
            <p className="umrah1">Tour</p>
            <p className="umrah2 mx-1">umrah</p>
          </div>
          <div className="shwoMore">
            <a>
                SHOW DETAILS <FaArrowRight />
            </a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UmrahhomePageCardTwo;
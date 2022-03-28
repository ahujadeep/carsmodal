import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Donut } from "react-dial-knob";

const Ratingscircle = () => {
    const [value,setValue]=useState(0);
  return (
    <>
      <Row className="border-bottom mb-2">
        <Col>
          <Donut
            diameter={50}
            min={0}
            max={5}
            step={0.1}
            value={value}
            theme={{
              donutColor: "blue",
            }}
            onValueChange={setValue}
            ariaLabelledBy={"my-label"}
          >
            <label id={"my-label"}>Some label</label>
          </Donut>
        </Col>
      </Row>
    </>
  );
};

export default Ratingscircle;

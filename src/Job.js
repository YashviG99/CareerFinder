import React, { useState } from "react";
import { Card, Badge, Button, Collapse, Row, Col } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <Card
      className="mb-4 shadow border-0"
      style={{
        borderRadius: "18px",
        overflow: "hidden"
      }}
    >
      <Card.Body>

        <Row>

          <Col md={9}>

            <h3 className="font-weight-bold mb-1">
              {job.title}
            </h3>

            <h5 className="text-primary mb-1">
              {job.company}
            </h5>

            <p className="text-muted mb-2">
              Software Engineering
            </p>

            <small className="text-muted">
              Posted on{" "}
              {new Date(job.created_at).toLocaleDateString()}
            </small>

            <div className="mt-3">

              <Badge
                pill
                variant="primary"
                className="mr-2 p-2"
              >
                {job.type}
              </Badge>

              <Badge
                pill
                variant="success"
                className="mr-2 p-2"
              >
                {job.location}
              </Badge>

            </div>

            <div className="mt-3">

              <strong className="text-warning">
                ⭐ 4.8 Company Rating
              </strong>

            </div>

            <div className="mt-2">

              <h5 className="text-success">
                ₹12 LPA - ₹22 LPA
              </h5>

            </div>

            <hr />

            <h6 className="font-weight-bold">
              Required Skills
            </h6>

            <div className="mb-4">

              <Badge
                variant="info"
                className="mr-2 p-2"
              >
                React
              </Badge>

              <Badge
                variant="info"
                className="mr-2 p-2"
              >
                JavaScript
              </Badge>

              <Badge
                variant="info"
                className="mr-2 p-2"
              >
                HTML
              </Badge>

              <Badge
                variant="info"
                className="mr-2 p-2"
              >
                CSS
              </Badge>

            </div>

            <h6>
              How to Apply
            </h6>

            <ReactMarkdown source={job.how_to_apply} />

            <div className="mt-4 d-flex">

              <Button
                variant="primary"
                className="mr-2"
                onClick={() => setOpen(!open)}
              >
                {open ? "Hide Details" : "View Details"}
              </Button>

              <Button
                variant="success"
                className="mr-2"
              >
                Apply Now
              </Button>

              <Button
                variant={favorite ? "danger" : "outline-danger"}
                onClick={() => setFavorite(!favorite)}
              >
                {favorite ? "♥ Saved" : "♡ Save"}
              </Button>

            </div>

          </Col>

          <Col
            md={3}
            className="text-center"
          >

            <img
              src={job.company_logo}
              alt={job.company}
              width="120"
              height="120"
              style={{
                objectFit: "cover",
                borderRadius: "50%",
                border: "4px solid #0d6efd",
                padding: "5px"
              }}
            />

          </Col>

        </Row>

        <Collapse in={open}>

          <div className="mt-5">

            <h4 className="mb-3">
              Job Description
            </h4>

            <ReactMarkdown source={job.description} />

          </div>

        </Collapse>

      </Card.Body>
    </Card>
  );
}
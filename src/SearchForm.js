import React from "react";
import { Form, Col, Row, InputGroup } from "react-bootstrap";

export default function SearchForm({ params, onParamChange }) {
  return (
    <div
      className="mb-5 p-4 bg-white shadow-sm"
      style={{ borderRadius: "15px" }}
    >
      <h3 className="mb-4 text-center text-primary">
        Find Your Dream Job
      </h3>

      <Form>

        <Row>

          <Col md={6} className="mb-3">

            <Form.Label>Job Title / Keyword</Form.Label>

            <InputGroup>

              <Form.Control
                type="text"
                placeholder="React Developer, Java, Python..."
                name="description"
                value={params.description || ""}
                onChange={onParamChange}
              />

            </InputGroup>

          </Col>

          <Col md={6} className="mb-3">

            <Form.Label>Location</Form.Label>

            <Form.Control
              type="text"
              placeholder="Ahmedabad, Bangalore..."
              name="location"
              value={params.location || ""}
              onChange={onParamChange}
            />

          </Col>

        </Row>

        <Row>

          <Col md={4} className="mb-3">

            <Form.Label>Company</Form.Label>

            <Form.Control
              type="text"
              placeholder="Google, Amazon..."
              disabled
            />

          </Col>

          <Col md={4} className="mb-3">

            <Form.Label>Experience</Form.Label>

            <Form.Control as="select" disabled>

              <option>Any</option>

              <option>Fresher</option>

              <option>1-3 Years</option>

              <option>3-5 Years</option>

              <option>5+ Years</option>

            </Form.Control>

          </Col>

          <Col md={4} className="d-flex align-items-end mb-3">

            <Form.Check
              type="checkbox"
              label="Full Time Only"
              name="full_time"
              checked={params.full_time || false}
              onChange={onParamChange}
            />

          </Col>

        </Row>

      </Form>

    </div>
  );
}
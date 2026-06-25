import React, { useState } from "react";
import { Card, Badge, Button, Collapse } from "react-bootstrap";
import ReactMarkdown from "react-markdown";

export default function Job({ job }) {
  const [open, setOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);

  return (
    <Card
      className="mb-4 shadow-sm border-0"
      style={{ borderRadius: "15px" }}
    >
      <Card.Body>

        <div className="d-flex justify-content-between align-items-start flex-wrap">

          <div>

            <h4 className="font-weight-bold">

              {job.title}

            </h4>

            <h6 className="text-primary">

              {job.company}

            </h6>

            <small className="text-muted">

              Posted :
              {" "}
              {new Date(job.created_at).toLocaleDateString()}

            </small>

            <div className="mt-3">

              <Badge
                variant="primary"
                className="mr-2 p-2"
              >
                {job.type}
              </Badge>

              <Badge
                variant="success"
                className="p-2"
              >
                {job.location}
              </Badge>

            </div>

          </div>

          <div className="text-center">

            <img
              src={job.company_logo}
              alt={job.company}
              width="80"
              height="80"
              style={{
                borderRadius: "50%",
                objectFit: "cover"
              }}
            />

            <br />

            <Button
              variant={favorite ? "danger" : "outline-danger"}
              size="sm"
              className="mt-3"
              onClick={() => setFavorite(!favorite)}
            >
              {favorite ? "♥ Saved" : "♡ Save"}
            </Button>

          </div>

        </div>

        <hr />

        <div className="mb-3">

          <strong>How to Apply</strong>

          <ReactMarkdown source={job.how_to_apply} />

        </div>

        <Button
          variant="primary"
          onClick={() => setOpen(!open)}
        >
          {open ? "Hide Details" : "View Details"}
        </Button>

        <Collapse in={open}>

          <div className="mt-4">

            <ReactMarkdown source={job.description} />

          </div>

        </Collapse>

      </Card.Body>

    </Card>
  );
}
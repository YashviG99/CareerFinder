import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

import SearchForm from "./SearchForm";
import JobsPagination from "./JobsPagination";
import Job from "./Job";
import useFetchJobs from "./useFetchJobs";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const {
    jobs,
    loading,
    error,
    hasNextPage
  } = useFetchJobs(params, page);

  function handleParamChange(e) {
    const param = e.target.name;

    const value =
      e.target.type === "checkbox"
        ? e.target.checked
        : e.target.value;

    setPage(1);

    setParams(prev => ({
      ...prev,
      [param]: value
    }));
  }

  return (
    <>

      <Navbar />

      <Hero />

      <Container className="my-5">

        <div className="text-center mb-5">

          <h2 className="display-5 font-weight-bold">

            Latest Opportunities

          </h2>

          <p
            className="text-muted"
            style={{
              maxWidth: "700px",
              margin: "20px auto"
            }}
          >
            Browse the latest software engineering,
            frontend, backend, internship and remote
            opportunities from top companies.
          </p>

        </div>

        <SearchForm
          params={params}
          onParamChange={handleParamChange}
        />

        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />

        {loading && (

          <div className="text-center my-5">

            <h3>

              Loading Jobs...

            </h3>

          </div>

        )}

        {error && (

          <div
            className="alert alert-danger text-center"
          >

            Unable to load jobs.

          </div>

        )}

        {!loading &&
          !error &&
          jobs.length === 0 && (

            <div
              className="alert alert-warning text-center"
            >

              No jobs found.

            </div>

          )}

        {jobs.map(job => (

          <Job
            key={job.id}
            job={job}
          />

        ))}

        <JobsPagination
          page={page}
          setPage={setPage}
          hasNextPage={hasNextPage}
        />

      </Container>

      <Footer />

    </>
  );
}

export default App;
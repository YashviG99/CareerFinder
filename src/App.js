import React, { useState } from 'react';
import useFetchJobs from './useFetchJobs'
import { Container } from 'react-bootstrap'
import Job from './Job'
import JobsPagination from './JobsPagination';
import SearchForm from './SearchForm';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

function App() {
  const [params, setParams] = useState({})
  const [page, setPage] = useState(1)
  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page)

  function handleParamChange(e) {
    const param = e.target.name
    const value = e.target.value
    setPage(1)
    setParams(prevParams => {
      return { ...prevParams, [param]: value }
    })
  }

  return (
  <>
    <Navbar />

    <Hero />

    <Container className="my-5">

      <h2 className="mb-4 text-center">
        Latest Job Opportunities
      </h2>

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
        <h3 className="text-center">
          Loading Jobs...
        </h3>
      )}

      {error && (
        <h3 className="text-danger text-center">
          Unable to load jobs.
        </h3>
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

import { useEffect, useReducer } from "react";
import jobsData from "./data/jobs";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  UPDATE_HAS_NEXT_PAGE: "update-has-next-page"
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        loading: true,
        jobs: [],
        error: null,
        hasNextPage: false
      };

    case ACTIONS.GET_DATA:
      return {
        ...state,
        loading: false,
        jobs: action.payload.jobs
      };

    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: []
      };

    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return {
        ...state,
        hasNextPage: action.payload.hasNextPage
      };

    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const [state, dispatch] = useReducer(reducer, {
    jobs: [],
    loading: true,
    error: null,
    hasNextPage: false
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });

    try {
      let filteredJobs = [...jobsData];

      if (params.description) {
        filteredJobs = filteredJobs.filter(job =>
          job.title
            .toLowerCase()
            .includes(params.description.toLowerCase())
        );
      }

      if (params.location) {
        filteredJobs = filteredJobs.filter(job =>
          job.location
            .toLowerCase()
            .includes(params.location.toLowerCase())
        );
      }

      if (params.full_time) {
        filteredJobs = filteredJobs.filter(job =>
          job.type.toLowerCase().includes("full")
        );
      }

      const jobsPerPage = 5;

      const start = (page - 1) * jobsPerPage;

      const end = start + jobsPerPage;

      dispatch({
        type: ACTIONS.GET_DATA,
        payload: {
          jobs: filteredJobs.slice(start, end)
        }
      });

      dispatch({
        type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
        payload: {
          hasNextPage: end < filteredJobs.length
        }
      });

    } catch (error) {
      dispatch({
        type: ACTIONS.ERROR,
        payload: {
          error
        }
      });
    }

  }, [params, page]);

  return state;
}
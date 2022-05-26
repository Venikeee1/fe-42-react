import { useEffect, useState } from 'react';

export const useFetch = (requestFn, deps, initialState) => {
  const [data, setData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const asyncRequest = async () => {
      try {
        setLoading(true);
        const result = await requestFn();
        setData(result.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    asyncRequest();
  }, deps);

  return {
    data,
    loading,
    error,
  };
};

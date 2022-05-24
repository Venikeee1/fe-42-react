import { useEffect, useState } from 'react';

export const useFetch = (request, deps) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const asyncRequest = async () => {
      try {
        setLoading(true);
        const result = await request();
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

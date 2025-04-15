import { useEffect, useState } from "react";

export default function useApiData(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (endpoint) {
      fetch(endpoint, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              "Network response was not ok" + response.statusText
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          console.log("data", data.results);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          setError(error);
          setLoading(false);
        });
    }
  }, []);

  return { data, loading, error };
}

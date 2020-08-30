import React from "react";
import { useParams } from "react-router-dom";
import { getClient } from "../services/api.js";

export default function ClientsDetails() {
  const { id } = useParams();
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [client, setClient] = React.useState([]);

  React.useEffect(() => {
    getClient(id).then(
      (result) => {
        setIsLoaded(true);
        setClient(result);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
        console.log(
          "There has been a problem with the fetch operation: " + error.message
        );
      }
    );
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ul>
          <li>{client.id}</li>
          <li>{client.name}</li>
        </ul>
      </>
    );
  }
}

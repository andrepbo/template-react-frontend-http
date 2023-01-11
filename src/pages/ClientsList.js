import React from "react";
import { Link } from "react-router-dom";
import { getClients } from "../services/api.js";

export default function ClientsList() {
  // useReducer é geralmente preferível em relação ao useState
  // quando se tem uma lógica de estado complexa que envolve múltiplos sub-valores,
  // ou quando o próximo estado depende do estado anterior.
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [clients, setClients] = React.useState([]);

  React.useEffect(() => {
    getClients().then(
      (result) => {
        setClients(result);
        setIsLoaded(true);
      },
      (error) => {
        setError(error);
        setIsLoaded(true);
        console.log(
          "There has been a problem with the fetch operation: " + error.message
        );
      }
    );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link to={`/client/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    );
  }
}

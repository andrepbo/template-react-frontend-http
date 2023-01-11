const baseUrl = "http://localhost:3333";
// const token = localStorage.getItem("token");
// let  httpHeaders = { "Content-type": "application/json", 'Accept-Charset' : 'utf-8', Authorization: `Bearer ${token}`}
// let headers = new Headers(httpHeaders);

let initGET = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default",
};

// POST request to login
export function postToLogin(email, password) {
  const postInfo = {
    method: "POST",
    body: JSON.stringify({ email, password }),
    headers: new Headers({
      "Content-type": "application/json",
    }),
  };
  return fetch(`${baseUrl}/users/login`, postInfo).then((res) => res.json());
}

// POST request to add an item
export function postAddClient(clientInfo) {
  const postInfo = {
    method: "POST",
    body: JSON.stringify(clientInfo),
    headers: new Headers({
      "Content-type": "application/json",
      // Authorization: `Bearer ${token}`,
    }),
  };
  return fetch(`${baseUrl}/client/id`, postInfo)
    .then((res) => {
      return res;
    })
    .catch((err) => console.error(err));
}

// GET request to list clients
export function getClients() {
  let request = new Request(`${baseUrl}/clients`, initGET);
  return fetch(request).then((res) => {
    return res.ok ? res.json() : console.log("Network response was not ok.");
  });
}

// GET request to list a client
export function getClient(id) {
  let request = new Request(`${baseUrl}/client/${id}`, initGET);
  return fetch(request).then((res) => {
    return res.ok ? res.json() : console.log("Network response was not ok.");
  });
}

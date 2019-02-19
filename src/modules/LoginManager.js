const remoteURL = "http://localhost:5002";

export default {
  getAllUserInfo() {
    return fetch(`${remoteURL}/users/?_embed=tasks&_embed=emotions&_embed=articles`)
    .then(response=>response.json())
 },

  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json());
  },

  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json());
  },
  
  getNameAndPassword(userName, password) {
    return fetch(`${remoteURL}/users/?userName=${userName}&password=${password}`)
    .then(response => response.json())
  },

// http://localhost:5002/users?userName=Tom Smith&password=one

  post(newUser) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newUser)
    }).then(data => data.json());
  }
};
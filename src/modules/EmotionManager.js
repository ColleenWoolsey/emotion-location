const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/emotions/${id}`)
    .then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/emotions`)
    .then(e => e.json());
  }
};
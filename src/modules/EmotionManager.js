const remoteURL = "http://localhost:5002";

export default {

getAllEmotionInfo() {
  return fetch(`${remoteURL}/emotions/?_embed=tasks`)
  .then(response=>response.json())
},

  get(id) {
    return fetch(`${remoteURL}/emotions/${id}`)
    .then(e => e.json());
  },
  getAll() {
    return fetch(`${remoteURL}/emotions`)
    .then(e => e.json());
  }
};
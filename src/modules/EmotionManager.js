const remoteURL = "http://localhost:5002";

export default {

// ********** Examples *********

getExamplesByEmo(id) {
  return fetch(`${remoteURL}/examples?emotionId=${id}`)
  .then(e => e.json());
},

getAllExamples() {
  return fetch(`${remoteURL}/examples`)
  .then(e => e.json());
},

// http://localhost:5002/examples?emotionId=1


// ********** Emotions *********
getAllEmotionInfo() {
  return fetch(`${remoteURL}/emotions/?_embed=examples`)
  .then(response=>response.json())
},

  get(id) {
    return fetch(`${remoteURL}/emotions/${id}_expand=examples`)
    .then(e => e.json());
  },
  

  getAll() {
    return fetch(`${remoteURL}/emotions`)
    .then(e => e.json());
  }
};
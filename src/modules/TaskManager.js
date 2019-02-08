const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
  },
 
  getAll() {
    return fetch(`${remoteURL}/tasks?_expand=emotion`).then(e => e.json());
  },

  post(newTask) {
    return fetch(`${remoteURL}/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newTask)
    }).then(data => data.json());
  },

  del(taskId) {
    return fetch(`${remoteURL}/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
        }
    })
  },

  put(id, existingTask) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingTask)
      }).then(data => data.json());
  }
}
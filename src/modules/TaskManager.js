const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
  },
 
  getAll() {
    return fetch(`${remoteURL}/tasks/?_expand=emotion`).then(e => e.json());
  },

  getTasksByUser(id) {
    return fetch(`${remoteURL}/tasks?userId=${id}&_expand=emotion`)
    .then(e => e.json());
  },

  // http://localhost:5002/tasks?userId=2&_expand=emotion&sort=dueDate
   // http://localhost:5002/tasks?userId=2&_expand=emotion

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

  patch(id, existingTask) {
    return fetch(`${remoteURL}/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingTask)
      }).then(data => data.json());
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
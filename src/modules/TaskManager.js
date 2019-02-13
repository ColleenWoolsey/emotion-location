const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/tasks/${id}`).then(e => e.json());
  },
 
  getAll() {
    return fetch(`${remoteURL}/tasks/?_expand=emotion&_expand=example`).then(e => e.json());
  },

  getTasksByUser(userId) {
    return fetch(`${remoteURL}/tasks?userId=${userId}&_expand=emotion&_expand=examples`)
    .then(e => e.json());
  },

  // http://localhost:5002/tasks?userId=2&_expand=emotion&sort=dueDate

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

  patch (changes, id){
    return fetch (`${remoteURL}/tasks/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(changes)
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
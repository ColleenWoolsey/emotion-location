const remoteURL = "http://localhost:5002";

export default {
  get(id) {
    return fetch(`${remoteURL}/articles/${id}`).then(e => e.json());
  },
 
  getAll() {
    return fetch(`${remoteURL}/articles/?_expand=emotion`).then(e => e.json());
  },

  getArticlesByUser(id) {
    return fetch(`${remoteURL}/articles?userId=${id}`)
    .then(e => e.json());
  },

  post(article) {
    return fetch(`${remoteURL}/articles`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(article)
    }).then(data => data.json());
  },

  del(articleId) {
    return fetch(`${remoteURL}/articles/${articleId}`, {
      method: "DELETE",
      headers: {
          "Content-Type": "application/json"
        }
    })
  },

  patch (changes, id){
    return fetch (`${remoteURL}/articles/${id}`,{
      method: "PATCH",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify(changes)
    })
  },

  put(id, existingArticle) {
    return fetch(`${remoteURL}/articles/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(existingArticle)
      }).then(data => data.json());
  }
}
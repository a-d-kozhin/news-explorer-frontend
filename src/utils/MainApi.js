export const BASE_URL = 'https://api.news-x.students.nomoreparties.co';

export const headers = {
  'Content-Type': 'application/json'
};

function _handleResponse(res) {
    return res.json();
}

function _handleError(err) {
  return Promise.reject(`An error occured: ${err.message}`)
}

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password, name })
  })
    .then(res => _handleResponse(res))
    .catch(err => _handleError)
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password })
  })
    .then(res => _handleResponse(res))
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        return res;
      } else {
        return res;
      }
    })
    .catch(err => _handleError)
};

export const getProfile = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => _handleResponse(res))
    .then(res => {
      localStorage.setItem('name', res.name);
      localStorage.setItem('email', res.email);
      localStorage.setItem('_id', res._id);
      localStorage.setItem('loggedIn', true);
    })
    .catch(err => _handleError)
};

export const getUserArticles = (token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'GET',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => _handleResponse(res))
    .catch(err => _handleError)
};

export const saveArticle = (article, token) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify(article)
  })
    .then(res => _handleResponse(res))
    .catch(err => _handleError)
};

export const deleteArticle = (articleID, token) => {
  return fetch(`${BASE_URL}/articles/${articleID}`, {
    method: 'DELETE',
    headers: {
      ...headers,
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => _handleResponse(res))
    .catch(err => _handleError)
};
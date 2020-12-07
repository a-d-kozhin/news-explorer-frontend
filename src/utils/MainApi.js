export const BASE_URL = 'https://api.news-x.students.nomoreparties.co';

export const headers = {
  'Content-Type': 'application/json'
};

export const register = (email, password, name) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password, name })
  })
    .then((response) => response.json())
    .then((res) => {
      console.log(res);
      return res;
    })
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ email, password })
  })
    .then((response => response.json()))
    .then((res) => {
      if (res.token) {
        localStorage.setItem('jwt', res.token);
        localStorage.setItem('name', res.user.name);
        localStorage.setItem('email', res.user.email);
        localStorage.setItem('_id', res.user._id);
        return res;
      } else {
        return res;
      }
    })
};

export const saveArticle = (keyword, title, text, date, source, link, image) => {
  return fetch(`${BASE_URL}/articles`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ keyword, title, text, date, source, link, image })
  })
    .then((response => response.json()))
};

export const deleteArticle = (articleID) => {
  return fetch(`${BASE_URL}/articles/${articleID}`, {
    method: 'DELETE',
    headers: headers,
  })
    .then((response => response.json()))
};
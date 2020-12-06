const NEWSAPI_URL = 'https://nomoreparties.co/news/v2/everything?';
const NEWSAPI_KEY = 'e8ca36bd596a40b586e7724fee1da248';

let currentDate = new Date().toISOString().slice(0, 10);

let date = new Date();
let sevenDaysAgoDate = date.setDate(date.getDate() - 7);
sevenDaysAgoDate = new Date(sevenDaysAgoDate).toISOString().slice(0, 10);

function getArticles(keyword) {
  return fetch(
    `${NEWSAPI_URL}q=${keyword}&apiKey=${NEWSAPI_KEY}&from=${currentDate}&to=${sevenDaysAgoDate}&sortBy=publishedAt&pageSize=100`
    , {
      method: 'GET',
    headers: {'Content-Type': 'application/json'}
  })
  .then((res) => {
    if (res.ok) return res.json();
    return Promise.reject('Promise rejected')
  })
}
module.exports = {currentDate, sevenDaysAgoDate, NEWSAPI_URL, getArticles};
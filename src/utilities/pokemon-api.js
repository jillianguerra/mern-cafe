import sendRequest from './send-request';

const BASE_URL = '/api/pokemon';

export function getAll() {
  return sendRequest(BASE_URL);
}
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}
export function getAllTypes(){
  return sendRequest(`${BASE_URL}/type`)
}
export function getByType(type){
  return sendRequest(`${BASE_URL}/type/${type}`)
}

export function getReviews(id){
  return sendRequest(`${BASE_URL}/${id}/reviews`)
}
export function addReview(id, content){
  return sendRequest(`${BASE_URL}/${id}/reviews`, `POST`, content)
}
export function changeReview(id, content){
  return sendRequest(`${BASE_URL}/${id}/reviews`, `PUT`, content)
}
export function deleteReview(id){
  return sendRequest(`${BASE_URL}/${id}/reviews`, `DELETE`, content)
}
export function findReview(id){
  return sendRequest(`${BASE_URL}/${id}/reviews/one`)
}
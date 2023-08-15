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

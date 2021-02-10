const BASE_URL = 'https://www.superheroapi.com/api.php/3959057974126526/search/';

export function getSuper() {
    return fetch(BASE_URL + 'name').then(res => res.json());
}
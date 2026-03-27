import axios from 'axios';
function fetcher(origin) {
    return axios.get(origin)
}

export { fetcher }
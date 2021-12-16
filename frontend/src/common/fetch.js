import axios from 'axios';
axios.defaults.baseURL = 'https://gateway.marvel.com/v1/public/';
const AUTH_KEY = 'd97f70ac04b1fc04d2367d0509168a53';
const HASH = 'ed2602513d86315c8c9f2200d4b1950d';
const TS = 1000;

const params = {
	ts: TS,
	apikey: AUTH_KEY,
	hash: HASH
}

const GET_HEADERS = {
	method: "GET", 
	headers: {
		"Accept": "application/json",
		"Content-Type":"application/json",
		"X-Requested-With": "XMLHttpRequest",
	},
	credentials: "include"
}	

export default {
	get(module){
		return (success, error) => {
			return axios.get(module, {
				params: {...params}
			}, GET_HEADERS)
			.then(success)
			.catch(error);
		}
	},
	getFlat(module){
		return axios.get(module, {
				params: {...params}
			}, GET_HEADERS)
		
	},
	parallel(requests){
		return (success, error) => {
				return axios.all(requests)
				.then(axios.spread(success))
				.catch(error);
		}
	}
}
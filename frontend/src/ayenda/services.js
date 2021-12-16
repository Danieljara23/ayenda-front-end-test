
import serverApi from '../common/fetch';
import {COMICS_COUNT} from './constants';

export default {
	showListComics(success, error){
		return serverApi.get('comics')(success, error);
	},
	showPageListComics(page){
		const offset = page * COMICS_COUNT;
		return serverApi.get('comics?offset='+offset);
	},
	findByTitle(title){
		return serverApi.get('comics?titleStartsWith='+title);
	},
	findByYears(start, end){
		const params = start+"-01-01,"+end+"-12-31";
		return serverApi.get('comics?dateRange='+params);
	},
	getAllFilters(){
		return serverApi.parallel([serverApi.getFlat('characters'),serverApi.getFlat('comics')]);
	},
	findComicsByCharactersId(characterID){
		return serverApi.get('characters/'+characterID+'/comics')
	},
}
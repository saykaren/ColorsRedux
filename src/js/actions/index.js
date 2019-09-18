import C from '../constants';

export function addArticle(payload){
  return {type: C.ADD_ARTICLE, payload}
};
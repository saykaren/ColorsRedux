import C from '../constants';

export function addColor(payload){
  console.log(`in add function`);
  return {type: C.ADD_COLORS, payload}
};


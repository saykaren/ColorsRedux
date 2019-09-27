import C from '../constants';

export function removeColor(payload){
  console.log(`in remove function`);
  return {type: C.REMOVE_COLORS, payload}
};

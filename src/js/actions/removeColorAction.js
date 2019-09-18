import C from '../constants';

export function removeColor(payload){
  return {type: C.REMOVE_COLORS, payload}
};
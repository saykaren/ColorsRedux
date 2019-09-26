import C from '../constants';

export function removeColor(payload){
  // console.log(`payload for remove colors ${payload}`);
  // console.log(`payload id.... ${payload.id}`);
  return {type: C.REMOVE_COLORS, payload}
};
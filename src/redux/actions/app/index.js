
export const SET_AUTH = 'SET_AUTH';

export const setAuth = payload => dispatch => {
  dispatch ({ type: SET_AUTH, payload });
}

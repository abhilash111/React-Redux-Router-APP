
import { SET_AUTH } from '../../actions/app';

const initialState = {
  isAuth: false,
  name: '',
  email: '',
};

function setAuth(state, action) {
    const newState = {
        ...state,
        isAuth: action.payload.isAuth,
        name: action.payload.name,
        email: action.payload.email
    }
  return newState;
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTH:
      return setAuth(state, action);
    default:
      return state;
  }
}
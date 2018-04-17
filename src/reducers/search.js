import { FETCH_MOBILE_INFO } from "../actions/types";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MOBILE_INFO:
      return {
        ...state,
        ...action.payload
      };
  }

  return state;
}

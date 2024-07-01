import { types } from "../types/types";

// Cómo se vería el state 🔽
// const initialState = {
//    logged: false,
// }

export const authReducer = ( state = {}, action ) => {
   
   switch ( action.type ) {

      case types.login:
         return {
            ...state,
            logged: true,
            name: action.payload
         }

      case types.logout:
         return {
            logged: false,
         }
      
      default:
         return state;
   }
};

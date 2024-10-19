import axios from 'axios';


export const FETCH_WORLD_REQUEST = 'FETCH_WORLD_REQUEST'
export const FETCH_WORLD_SUCCESS = 'FETCH_WORLD_SUCCESS'
export const FETCH_WORLD_FAILURE = 'FETCH_WORLD_FAILURE'

const initialState = {
    loading: false,
    worldCountCorona: {},
    error: ''
  }
  
 export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_WORLD_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_WORLD_SUCCESS:
          console.log('success',action);
        return {
          loading: false,
          worldCountCorona: action.payload,
          error: ''
        }
      case FETCH_WORLD_FAILURE:
        return {
          loading: false,
          countryDet: [],
          error: action.payload
        }
      default: return state
    }
  }
  

export const worldCount = () => {

    console.log('inside reducer');
    return (dispatch) => {

        dispatch(fetchworldcountRequest());
        axios.get(`https://api.covid19api.com/summary`).then((response)=>{
                dispatch(fetchworldcountSuccess(response.data));
            }).catch((err) => {
                dispatch(fetchworldcountFailure(err.message))
            });
    }
}

export const fetchworldcountRequest = () => {
    return {
      type: FETCH_WORLD_REQUEST
    }
  }
  
  export const fetchworldcountSuccess = worldCountCorona => {
    return {
      type: FETCH_WORLD_SUCCESS,
      payload: worldCountCorona
    }
  }
  
  export const fetchworldcountFailure = error => {
    return {
      type: FETCH_WORLD_FAILURE,
      payload: error
    }
}
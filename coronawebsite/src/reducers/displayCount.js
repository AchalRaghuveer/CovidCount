import axios from 'axios';


export const FETCH_COUNT_REQUEST = 'FETCH_COUNT_REQUEST'
export const FETCH_COUNT_SUCCESS = 'FETCH_COUNT_SUCCESS'
export const FETCH_COUNT_FAILURE = 'FETCH_COUNT_FAILURE'

const initialState = {
    loading: false,
    countCorona: {},
    error: ''
  }
  
 export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNT_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_COUNT_SUCCESS:
          console.log('success',action);
        return {
          loading: false,
          countCorona: action.payload,
          error: ''
        }
      case FETCH_COUNT_FAILURE:
        return {
          loading: false,
          countryDet: [],
          error: action.payload
        }
      default: return state
    }
  }
  

export const viewCount = () => {

    console.log('inside reducer');
    return (dispatch) => {

        dispatch(fetchcountRequest());
        axios.get(`http://localhost:8080/getcountcorona`).then((response)=>{
                dispatch(fetchcountSuccess(response.data));
            }).catch((err) => {
                dispatch(fetchcountFailure(err.message))
            });
    }
}

export const fetchcountRequest = () => {
    return {
      type: FETCH_COUNT_REQUEST
    }
  }
  
  export const fetchcountSuccess = countCorona => {
    return {
      type: FETCH_COUNT_SUCCESS,
      payload: countCorona
    }
  }
  
  export const fetchcountFailure = error => {
    return {
      type: FETCH_COUNT_FAILURE,
      payload: error
    }
}
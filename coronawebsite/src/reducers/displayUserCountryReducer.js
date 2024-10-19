import axios from 'axios';


export const FETCH_COUNTRY_REQUEST = 'FETCH_COUNTRY_REQUEST'
export const FETCH_COUNTRY_SUCCESS = 'FETCH_COUNTRY_SUCCESS'
export const FETCH_COUNTRY_FAILURE = 'FETCH_COUNTRY_FAILURE'

const initialState = {
    loading: false,
    countryDet: [],
    error: ''
  }
  
 export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRY_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_COUNTRY_SUCCESS:
          console.log(action);
        return {
          loading: false,
          countryDet: action.payload,
          error: ''
        }
      case FETCH_COUNTRY_FAILURE:
        return {
          loading: false,
          countryDet: [],
          error: action.payload
        }
      default: return state
    }
  }
  

export const displayUserCountryReducers = (country) => {

    console.log('inside reducer');
    return (dispatch) => {

        dispatch(fetchcountryRequest());
        axios.get(`https://api.covid19api.com/total/country/${country}`).then((response)=>{
                const countryDetails = response.data;
                dispatch(fetchcountrySuccess(countryDetails));
            }).catch((err) => {
                dispatch(fetchcountryFailure(err.message))
            });
    }
}

export const fetchcountryRequest = () => {
    return {
      type: FETCH_COUNTRY_REQUEST
    }
  }
  
  export const fetchcountrySuccess = countryDetails => {
    return {
      type: FETCH_COUNTRY_SUCCESS,
      payload: countryDetails
    }
  }
  
  export const fetchcountryFailure = error => {
    return {
      type: FETCH_COUNTRY_FAILURE,
      payload: error
    }
}
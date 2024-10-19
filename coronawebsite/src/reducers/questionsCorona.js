import axios from 'axios';


export const FETCH_QUESTION_REQUEST = 'FETCH_QUESTION_REQUEST'
export const FETCH_QUESTION_SUCCESS = 'FETCH_QUESTION_SUCCESS'
export const FETCH_QUESTION_FAILURE = 'FETCH_QUESTION_FAILURE'

const initialState = {
    loading: false,
    coronamsg : "",
    error: ''
  }
  
 export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_QUESTION_REQUEST:
        return {
          ...state,
          loading: true
        }
      case FETCH_QUESTION_SUCCESS:
          console.log('success',action);
        return {
          loading: false,
          coronamsg: action.payload,
          error: ''
        }
      case FETCH_QUESTION_FAILURE:
        return {
          loading: false,
          coronamsg: "",
          error: action.payload
        }
      default: return state
    }
  }
  

export const questionPost = (name, country, total, diseased) => {

    console.log('inside reducer');
    return (dispatch) => {

        dispatch(fetchQuestionRequest());
        axios.post(`http://localhost:8080/setquestionscorona`,{
            name: name,
            country: country,
            total: total,
            diseased: diseased
        }).then((response)=>{
                dispatch(fetchQuestionSuccess(response.data));
            }).catch((err) => {
                dispatch(fetchQuestionFailure(err.message))
            });
    }
}

export const fetchQuestionRequest = () => {
    return {
      type: FETCH_QUESTION_REQUEST
    }
  }
  
  export const fetchQuestionSuccess = coronamsg => {
    return {
      type: FETCH_QUESTION_SUCCESS,
      payload: coronamsg
    }
  }
  
  export const fetchQuestionFailure = error => {
    return {
      type: FETCH_QUESTION_FAILURE,
      payload: error
    }
}
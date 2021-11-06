import { GET_ERRORS, IErrorsType } from '../types/errorType'
import { IAlert } from '../../utils/TypeScript'

const alertReducer = (state: IAlert = {}, action: IErrorsType): IAlert => {
    switch (action.type){
        case GET_ERRORS: 
            return action.payload
        default: 
            return state
    }
}

export default alertReducer;
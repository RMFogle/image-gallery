import { IAlert } from '../../utils/TypeScript'
import { GET_ERRORS } from '../types/errorType';

export const getErrors = (errors: IAlert ) => ({
    type: GET_ERRORS,
    errors
});
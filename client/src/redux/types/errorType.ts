import { IAlert } from '../../utils/TypeScript'

export const GET_ERRORS = 'GET_ERRORS';

export interface IErrors{
    type: typeof GET_ERRORS
    payload: IAlert
}

export type IErrorsType = IErrors
import { IImage } from '../../utils/TypeScript'

export const ADD_IMAGE = 'ADD_IMAGE'
export const LOAD_IMAGES = 'LOAD_IMAGES'
export const DELETE_IMAGE = 'DELETE_IMAGE'
export const FETCH_IMAGE = 'FETCH_IMAGE'
export const FETCH_IMAGES = 'FETCH_IMAGES'

export interface IAddImage{
    type: typeof ADD_IMAGE
    payload: IImage
}

export interface ILoadImages{
    type: typeof LOAD_IMAGES
    payload: IImage[]
}

export interface IDeleteImage{
    type: typeof DELETE_IMAGE
    payload: string
}

export interface IFetchImage{
    type: typeof FETCH_IMAGE
    payload: IImage[]
}

export interface IFetchImages{
    type: typeof FETCH_IMAGES
    payload: IImage[]
}

export type IImageType = 
| IAddImage
| ILoadImages
| IDeleteImage
| IFetchImage
| IFetchImages
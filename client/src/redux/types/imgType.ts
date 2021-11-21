import { IImage } from '../../utils/TypeScript'

export const ADD_IMAGE = 'ADD_IMAGE'
export const LOAD_IMAGES = 'LOAD_IMAGES'
export const DELETE_IMAGE = 'DELETE_IMAGE'

export interface IAddImageType{
    type: typeof ADD_IMAGE
    payload: IImage
}

export interface ILoadImagesType{
    type: typeof LOAD_IMAGES
    payload: IImage[]
}

export interface IDeleteImageType{
    type: typeof DELETE_IMAGE
    payload: string
}


export type IImageType = 
| IAddImageType
| ILoadImagesType
| IDeleteImageType
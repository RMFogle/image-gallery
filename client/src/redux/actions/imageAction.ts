import { Dispatch } from "react";
import { getAPI, postAPI, deleteAPI } from "../../utils/Api";
// import { IImage } from "../../utils/TypeScript";
// import { imageUpload } from "../../utils/ImageUpload";
import { ALERT, IAlertType } from "../types/alertType";
import { LOAD_IMAGES, DELETE_IMAGE, IImageType, ILoadImagesType, ADD_IMAGE } from "../types/imgType";

export const getImages = () => 
    async (dispatch: Dispatch<IAlertType | IImageType>) => {
    try {
    const res: any = await getAPI('image');

    dispatch({ type: LOAD_IMAGES, payload: res.data });
    } catch (err: any) {
        dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})    }
};  

export const addImage = (post: object) => 
    async (dispatch: Dispatch<IAlertType | IImageType>) => {
    try {
        const res: any = await postAPI('image', post);

        dispatch({ type: ADD_IMAGE, payload: res.data })
    } catch (err: any) {
        dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
    }
}; 

// export const beginAddImage = (image: string) =>
//     async (dispatch: Dispatch<IAlertType | IImageType>) => {
//         try {
//             const formData = new FormData();
//             formData.append('image', image)
//             await postAPI('image', {
//                 method: "POST",
//                 body: formData as FormData,
//                 headers: {
//                     'Content-type': 'multipart/form-data'
//                 }
//             });
//         } catch (err: any) {
//             dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
//         }

//     }

// export const startLoadImages = () => 
//     async (dispatch: Dispatch<IAlertType | ILoadImagesType>) => {
//         try {
//             const res: any = await getAPI('image')
//             dispatch({ 
//                 type: LOAD_IMAGES,
//                 payload: res.data
//             })
//         } catch (err: any) {
//             dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
//         }
//     }

// export const loadImages = (images: any) => ({
//         type: LOAD_IMAGES,
//         images
//     });

export const deleteImage = (id: string, token: string) =>
    async (dispatch: Dispatch<IAlertType | IImageType>) => {
        try {

            dispatch({ type: DELETE_IMAGE, payload: id })
            await deleteAPI(`image/${id}`, token)
        } catch (err: any) {
            dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
        }
    }

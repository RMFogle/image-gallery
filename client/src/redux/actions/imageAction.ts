import { Dispatch } from "react";
import { getAPI, postAPI, deleteAPI } from "../../utils/Api";
// import { IImage } from "../../utils/TypeScript";
// import { imageUpload } from "../../utils/ImageUpload";
import { ALERT, IAlertType } from "../types/alertType";
import { LOAD_IMAGES, DELETE_IMAGE, IImageType } from "../types/imgType";


export const beginAddImage = (image: any) =>
    async (dispatch: Dispatch<IAlertType | IImageType>) => {
        try {
            const formData = new FormData();
            formData.append('image', image)
            await postAPI('image', {
                method: "POST",
                body: formData as FormData,
                headers: {
                    'Content-type': 'multipart/form-data'
                }
            });
        } catch (err: any) {
            dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
        }

    }

export const startLoadImages = () => 
    async(dispatch: Dispatch<IAlertType | IImageType>) => {
        try {
            dispatch({ type: ALERT, payload: { loading: true }})

            const res: any = await getAPI('images')

            dispatch({
                type: LOAD_IMAGES,
                payload: res.data.images
            })

            dispatch({ type: ALERT, payload: { loading: false }})
        } catch (err: any) {
            dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
        }
    }

export const deleteImage = (id: string, token: string) =>
    async(dispatch: Dispatch<IAlertType | IImageType>) => {
        try {

            dispatch({ type: DELETE_IMAGE, payload: id })
            await deleteAPI(`image/${id}`, token)
        } catch (err: any) {
            dispatch({ type: ALERT, payload: { errors: err.response.data.msg }})
        }
    }

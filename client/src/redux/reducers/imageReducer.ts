import * as types from "../types/imgType";
import { IImage } from '../../utils/TypeScript'

const imageReducer = (state: IImage[] = [], action: types.IImageType
    ): IImage[] => {
    switch (action.type) {
        case types.ADD_IMAGE:
            return [action.payload, ...state]
        case types.LOAD_IMAGES:
            return action.payload
        case types.DELETE_IMAGE:
            return state.filter((image) => image._id !== action.payload);
        default:
            return state;
        }
}

export default imageReducer;
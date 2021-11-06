import mongoose from 'mongoose';
import { IGalleryImage } from '../config/interface'

const ImageSchema = new mongoose.Schema({
    image: {
        type: Buffer,
    }, 
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

ImageSchema.methods.toJSON = function () {
    const result = this.toObject();
    delete result.image;
    return result;
};

export default mongoose.model<IGalleryImage>('Image', ImageSchema);

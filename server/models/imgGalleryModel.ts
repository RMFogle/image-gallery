import mongoose from 'mongoose';
import { IGalleryImage } from '../config/interface'

const ImageSchema = new mongoose.Schema({
    image: {
        type: String,
    }, 
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

export default mongoose.model<IGalleryImage>('Image', ImageSchema);

import express, { Request, Response } from 'express'; 
import ImageSchema from '../models/imgGalleryModel';


const router = express.Router();
    
export const createImage = async (req: Request , res: Response) => {
        try {
        const image = new ImageSchema(req.body);
        const file = req.file?.buffer
        image.image = file;

        await image.save();
        res.status(201).send({ _id: image._id });
        } catch (error) {
        res.status(500).send({
            upload_error: 'Error while uploading file...Try again later.'
        });
        }
    };

export const getImages = async (req: Request, res: Response) => {
    try {
        const images = await ImageSchema.find({});
        res.send(images);
    } catch (error) {
        res.status(500).send({ get_error: 'Error while getting list of images.' });
    }
}

export const getImage = async (req: Request, res: Response) => {
    try {
        const result = await ImageSchema.findById(req.params.id);
        res.set('Content-Type', 'image/jpeg');
        res.send(result?.image);
    } catch (error) {
        res.status(400).send({ get_error: 'Error while getting image.' });
    }
}

export const deleteImage = async (req: Request, res: Response) => {
    const { id } = req.params; 

    await ImageSchema.findByIdAndRemove(id);

    res.json({ message: "Image deleted successfully." });
}

export default router;
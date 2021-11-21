import express, { Request, Response } from 'express'; 
import mongoose from 'mongoose'
import ImageSchema from '../models/imgGalleryModel';


const router = express.Router();
    
export const createImage = async (req: Request , res: Response) => {
        const post = req.body;
        const newImage = new ImageSchema(post)

        try {
        await newImage.save();
        res.status(201).send(newImage);
        } catch (error) {
        res.status(500).send({
            upload_error: 'Error while uploading file...Try again later.'
        });
        }
    };

export const getImages = async (req: Request, res: Response) => {
    try {
        const getImages = await ImageSchema.find();

        res.status(200).json(getImages)
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

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ImageSchema.findByIdAndRemove(id);

    res.json({ message: "Image deleted successfully." });
}

export default router;
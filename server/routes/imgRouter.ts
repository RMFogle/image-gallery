import express from 'express';
import multer from 'multer';
import { getImages, getImage, createImage, deleteImage } from '../controllers/imgCtrl';


const router = express.Router(); 

const upload = multer({
    limits: {
        fileSize: 1000000 // max file size 1MB = 1000000 bytes
    },
    fileFilter(req: any, file: any, cb: any) {
        if (!file.originalname.match(/\.(jpeg|jpg)$/)) {
        cb(new Error('only upload files with jpg or jpeg format.'));
        }
        cb(undefined as any, true); // continue with upload
    }
    });

router.get('/image', getImages);
router.post('/image', upload.single('image'), createImage); 
router.get('/image/:id', getImage); 
router.delete('/image/:id', deleteImage); 

export default router;
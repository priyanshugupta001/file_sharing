import express from 'express' ; //express ki help se routing kar rahe hai
import { uploadImage , downloadImage} from '../controller/image-controller.js';
import upload from '../utils/upload.js';

const router = express.Router();

router.post('/upload', upload.single('file') , uploadImage);

router.get('/file/:fileId' , downloadImage) ;

export default router ;
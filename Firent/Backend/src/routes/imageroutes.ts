import express, { Request, Response, Router } from 'express';
import multer, { StorageEngine } from 'multer';
import path from 'path';

const router: Router = express.Router();

// Multer configurations
const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'uploads/');
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const imageFileFilter = (req: Request, file: Express.Multer.File, cb: (error: Error | null, shouldAcceptFile: boolean) => void) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

const upload = multer({ storage, fileFilter: imageFileFilter });

router.post('/upload', upload.single('image'), (req: Request, res: Response) => {
    res.json({ file: req.file.path });
});

export default router;

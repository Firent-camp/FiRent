import multer, { StorageEngine, FileFilterCallback } from 'multer';
import path from 'path';

interface Request {
  // Add properties used from the req object, if any
}

const storage: StorageEngine = multer.diskStorage({
    destination: (req: Request, file: Express.Multer.File, cb: (error: Error | null, destination: string) => void) => {
        cb(null, 'uploads/');  // 'uploads/' is the directory where images will be stored
    },
    filename: (req: Request, file: Express.Multer.File, cb: (error: Error | null, filename: string) => void) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Generate a unique name for every upload
    }
});

const upload = multer({ storage });

export { upload };

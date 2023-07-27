// Assuming you have already set up a MongoDB connection and defined the 'File' model.

import File from "../modals/file.js";
import dotenv from 'dotenv';
dotenv.config();
const KAJUNATH = process.env.BASE_URL;

export const uploadImage = async (request, response) => {
    console.log(request);
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    };

    try {
        // Assuming 'File.create' is a Mongoose model method to create a new document in the 'File' collection.
        console.log(fileObj)
        const file = await File.create(fileObj);
        file.save();
        console.log(file);
        response.status(200).json({ path: `${KAJUNATH}/file/${file._id}` });
    } catch (error) {
        console.error(error.message);
        response.status(500).json({ error: error.message });
    }
};

export const downloadImage = async (request, response) => {
    // console.log(request);
    try {
        // Assuming 'File.findById' is a Mongoose model method to find a document by its unique identifier.
        const file = await File.findById(request.params.fileId);

        if (!file) {
            return response.status(404).json({ error: "File not found" });
        }

        file.downloadContent++;
        await file.save();

        // Assuming 'response.download' sends the file to the client for download.
        response.download(file.path, file.name);
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({ error: error.message });
    }
};

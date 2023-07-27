
import File from "../modals/file.js";
import dotenv from 'dotenv' ;
dotenv.config(); 
const KAJUNATH = process.env.BASE_URL ;

export const uploadImage = async (request, response) => {
    
    console.log(request) ;
    const fileObj = {
        path:  request.file.path ,  
        name: request.file.originalname 
    }
    try{ 
        const file = await  File.create(fileObj); 
        console.log(file) ;
        response.status(200).json({path: `${KAJUNATH}/file/${file._id}` })
    } catch(error) {
        console.error(error.message);
        response.status(500).json({error: error.message })
    }
}

export const downloadImage = async (request, response) => {
    console.log(request);
    try{
      const file = await File.findById(request.params.fileId) 

      file.downloadContent++ ;

      await file.save() ;

    response.download(file.path, file.name) ;

    } catch(error) { 
            console.error(error.message) ;
            return response.status(500).json({error: error.message}) ;
    } 
}
import mongoose from 'mongoose' ;

const fileschema = new mongoose.Schema({ 
     path: {
        type: String
        
     },
     name: {
        type: String
     },
     downloadContent: {
        type: Number,
       
        default: 0
     }
})


const File = mongoose.model('file', fileschema);

export default File;
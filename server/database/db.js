import mongoose from 'mongoose' ; // ye help karta hai mongoDB se connection create karne ke liye


const DBConnection = async() => { 
 
    const MONODB_URL = process.env.MONGODB_URI;  

    // For example, if your password in plain-text is p@ssw0rd'9'!, you need to encode your password as: p%40ssw0rd%279%27%21

    try{  
        await mongoose.connect(MONODB_URL, {useNewUrlParser: true});
        console.log('Database connected successfully') ;
    } catch (error) {
        console.error('Error while connecting with the database', error.message) ;
    }
}

export default DBConnection ;
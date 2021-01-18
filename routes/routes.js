const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

let foto = 'mifoto.v1.png';

let ext = foto.split(".");
ext[1];


{ fieldname: 'image',
  originalname: 'jwt_ejemplo.png',
  encoding: '7bit',
  mimetype: 'image/png',
  destination:
   '/Users/wolfgangschubert/Desktop/back_21_multer/public/uploads',
  filename: 'ea561b28-0e5d-48d0-a120-ea7152b2fcdb.png',
  path:
   '/Users/wolfgangschubert/Desktop/back_21_multer/public/uploads/ea561b28-0e5d-48d0-a120-ea7152b2fcdb.png',
  size: 73119 }


const storage = multer.diskStorage({
    destination: path.join(__dirname,'../public/uploads'),
    filename: (req,res,cb)=>{
        cb(null, file.originalname);
    }
});
const cargarImagen = multer({
    storage,
    limits: {fileSize: 1000000 }
}).single('image');

router.post('/images/upload',(req,res)=>{

    cargarImagen(req,res,(err)=>{
        if(err){
            err.message = 'Error al cargar imagen.';
            return res.send(err);
        }
         
        
        console.log(req.file);
        res.send('Imagen ok!');

    })
    
   

});


module.exports = router;
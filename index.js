const express = require('express');
const multer = require('multer');
const path = require('path');
const uuid = require('uuid/v4');

const app = express();
app.set('port', process.env.PORT || 4001);

//config Multer
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename: (req,file,cb)=>{
        cb(null, uuid()+path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));



app.use(require('./routes/routes'));



app.listen(app.get('port'),()=>{
    console.log(`Servidor en el puerto ${app.get('port')}`);
})
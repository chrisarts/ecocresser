import express from 'express';
import User from '../models/user';
import md5 from 'md5';
import jwt from 'jsonwebtoken';
import config from '../config'

let router = express.Router();

router.post('/', (req, res) => {
    const { identifier, password } = req.body;

    User.query({
        where: { mail: identifier }
    }).fetch().then(user =>{
        if(user){
            if(md5(password) === user.get('password')){
                const token =jwt.sign({
                    id: user.get('id'),
                    mail: user.get('mail')
                }, config.jwtSecret);
                res.json({ token });
            }else{
                res.status(401).json({ errors: { form: 'Password Incorrecto' } });
            }
        }else{
            res.status(401).json({ errors: { form: 'No se ha logrado iniciar sesión con la información suministrada' } });
        }
    })
});

export  default router;
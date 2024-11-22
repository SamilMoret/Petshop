import 'dotenv/config';
import jsonwebtoken  from 'jsonwebtoken';


export function gerarToken(email){
    const secret = process.env.JWT_TOKEN_SECRET;
    if (!secret) {
        throw new Error('JWT_TOKEN_SECRET não está definido');
    }

    return jsonwebtoken.sign({email}, process.env.JWT_TOKEN_SECRET,{expiresIn: '1h'});

}

export function verificarToken(req, res, next){

    const token = req.header('Authorization')?.replace('Bearer', '');
    
    

    if(!token) {
        return res.status(401).json ({error: 'Token requerido'});
    }

    try {
       const dataToken =  jsonwebtoken.verify(token, process.env.JWT_TOKEN_SECRET);
       req.emailConetado = dataToken.email;
       next();

    } catch(e) {
        res.status(401).json ({error: 'Token não valido'});
    }
    

}


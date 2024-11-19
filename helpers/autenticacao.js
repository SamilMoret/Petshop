import 'dotenv/config';
import jsonwebtoken  from 'jsonwebtoken';


function gerarToken(email){
    const secret = process.env.JWT_TOKEN_SECRET;
    if (!secret) {
        throw new Error('JWT_TOKEN_SECRET não está definido');
    }
    
    return jsonwebtoken.sign({email}, process.env.JWT_TOKEN_SECRET,{expiresIn: '1h'});

}

export {gerarToken};
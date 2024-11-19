import usuariosModel from '../models/usuarios.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import { gerarToken } from '../helpers/autenticacao.js';

class usuarioController{
    constructor() {}

    async register(req, res) {
        try {
            const { email, nome, telefone, password } = req.body;
            const usuarioExiste = await usuariosModel.getOne({ email });
            if (usuarioExiste) {
                return res.status(400).json({ error: 'O usuário está cadastrado' });
            }

            const passwordCriptografado = await bcrypt.hash(password, 10);

            const data = await usuariosModel.create({
                email, 
                nome, 
                telefone, 
                password: passwordCriptografado 
            });
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e);
        }
    }

    async login(req, res) {
        const {email, password} = req.body;

        const usuarioExiste = await usuariosModel.getOne({ email });

            if (!usuarioExiste) {
                return res.status(400).json({ error: 'O usuário não cadastrado' });
        }

        const passwordValido = await bcrypt.compare(password, usuarioExiste.password);

        if (!passwordValido) {
            return res.status(400).json({ error: 'Password não valido' });
        }

        const token = gerarToken(email);

        return res.status(200).json({msg: 'Usuario Autenticado', token})

    }catch (e) {
       
        res.status(500).send(e);
    }
}

export default new usuarioController;

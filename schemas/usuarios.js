import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema(
    {
        email: {
            type:String,
            require: true,
            unique: true,
            trim: true,
        },

        nome: {
            type: String,
            require: true,
            trim: true,
        },

        telefone: {
            type: String,
            require: false,
        },

        password: {
            type: String,
            require: true,
        }

    }

);

export default mongoose.model('usuarios', usuarioSchema);
import mongoose from "mongoose";

const petSchema = new mongoose.Schema(

    {
        
            nome: {
                type: String,
                require: true,

            },

            tipo: {
                type: String,
                require: true,
            },

            raça: {
                type: String, 
            },

            idade: {
                type: Number,
                },

            descrição: {
                tipe: String

            },

            adotado: {
                type: Boolean
                }

        }, {Timestamp: true}
);

export default mongoose.model('pets', petSchema);
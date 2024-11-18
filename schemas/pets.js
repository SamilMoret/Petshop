import mongoose from "mongoose";

const petSchema = new mongoose.Schema(

    {
        
            nome: {
                type: String,
                required: true,

            },

            tipo: {
                type: String,
                required: true,
                enum: [
                    'Cachorro', 'Gato', 'Coelho'
                ],
            },

            raça: {
                type: String, 
            },

            idade: {
                type: Number,
                min: [0, ' A idade não pode ser negativa'],
            max: [30, 'A idade não parece estar correta']
                },

            descrição: {
                tipe: String,
                

            },

            adotado: {
                type: Boolean,
                default: false,

                }

        }, {Timestamp: true}
);

export default mongoose.model('pets', petSchema);
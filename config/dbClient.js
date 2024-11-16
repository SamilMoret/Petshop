import 'dotenv/config';
import { MongoClient } from "mongodb";
import mongoose from 'mongoose';


class dbClient {
        construtor() {
            this.connectarBaseDados();
        }

        async connectarBaseDados() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adocao`;
        await mongoose.connect(queryString);
    } 

        async fecharConecao() {
            try {
                await this.mongoose.disconnect();
                console.log("Conexão à base de dados fechada")

            } catch (e) {
                console.error("Error ao fechar á conexão:", e);
            }
        }
}

export default new dbClient;
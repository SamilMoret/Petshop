import 'dotenv/config';
import mongoose from 'mongoose';

class DbClient {
    constructor() {
        this.connectarBaseDados();
    }

    async connectarBaseDados() {
        try {
            const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/adocao?retryWrites=true&w=majority`;
            await mongoose.connect(queryString);
            console.log("Conectado à base de dados com sucesso!");
        } catch (error) {
            console.error("Erro ao conectar à base de dados:", error);
        }
    }

    async fecharConexao() {
        try {
            await mongoose.disconnect();
            console.log("Conexão à base de dados fechada");
        } catch (error) {
            console.error("Erro ao fechar a conexão:", error);
        }
    }
}

export default DbClient;

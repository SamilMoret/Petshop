import 'dotenv/config';
import { MongoClient } from "mongodb";


class dbClient {
    constructor(){
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@${process.env.SERVER_DB}/?retryWrites=true&w=majority&appName=adocao`;
        this.client = new MongoClient(queryString);
        this.conetarBD();
    } 

    async conetarBD() {
        try {
            await this.client.connect();
            this.db = this .client.db('adocao');
            console.log("Conetado ao servidor de banco de dados")

        } catch (e) {
            console.log(e);
        }
    }
}

export default new dbClient;
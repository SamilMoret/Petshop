import 'dotenv/config';
import dbClient from "../config/dbClient.js";



class petsModel {

    async create(pet){
        const colPets = dbClient.db.collection('pets');
        await colPets.insertOne(pet)

    }
}

export default new petsModel;
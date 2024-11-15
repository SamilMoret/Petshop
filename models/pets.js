import { ObjectId } from "mongodb";
import dbClient from "../config/dbClient.js";



class petsModel {

    async create(pet){
        const colPets = dbClient.db.collection('pets');
        return await colPets.insertOne(pet);

    }

    async update(id, pet){
        const colPets = dbClient.db.collection('pets');
        return await colPets.updateOne({_id: new ObjectId(id)}, {$set: pet});
    }

    async delete(id){
        const colPets = dbClient.db.collection('pets');
        return await colPets.deleteOne({_id: new ObjectId(id)});
    }

    async getAll() {
        const colPets = dbClient.db.collection('pets');
        return await colPets.updateOne({id: new ObjectId})
    }

    async getOne(id) {
        const colPets = dbClient.db.collection('pets');
        return await colPets.findOne({_id: new ObjectId(id)}, pet);
    }
}

export default new petsModel;
import 'dotenv/config';
import express from 'express';
import routesPets from './routes/pets.js';
import routesUsuarios from './routes/usuarios.js';
import DbClient from './config/dbClient.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pets', routesPets);
app.use('/users', routesUsuarios);

const dbClient = new DbClient();

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor ativo no porto ' + PORT));
} catch (e) {
    console.log(e);
}

process.on('SIGINT', async () => {
   await dbClient.fecharConecao();
    process.exit(0);
});

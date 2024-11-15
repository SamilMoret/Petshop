import 'dotenv/config';
import express from 'express';
import routesPets from './routes/pets.js';

const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/pets', routesPets);

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log('Servidor ativo no porto ' + PORT));
} catch(e) {
    console.log(e);
}

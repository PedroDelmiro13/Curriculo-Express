import express from 'express';
import "dotenv/config";
import models from './models';
import routes from "./routes";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello from Express with Babel!');
});

app.use("/api", routes);

const eraseDatabaseOnSync = true;
  models.sequelize.sync({ force: eraseDatabaseOnSync })
    .then(() => console.log("Banco sincronizado e tabelas criadas"))
    .catch(err => console.error("Erro ao sincronizar banco:", err));

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
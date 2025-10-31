import { DataTypes } from "sequelize";
import { Sequelize } from "sequelize";
import pessoaModel from "./pessoaModel";
import "dotenv/config";
import skillModel from "./skillModel";
import formacaoModel from "./formacaoModel";

const sequelize = new Sequelize(process.env.POSTGRES_URL, {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    dialectModule: require("pg"),
});

const Pessoa = pessoaModel(sequelize, DataTypes);
const Skill = skillModel(sequelize, DataTypes);
const Formacao = formacaoModel(sequelize, DataTypes);

export default {sequelize, Pessoa, Skill, Formacao};
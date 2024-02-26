"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 
const pg_1 = require("pg");
require("dotenv").config(); // for the env vaiables
let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD } = process.env;
// console.log("DB details")
// console.log(PGDATABASE,PGHOST,PGUSER,PGPASSWORD);
//  const client = new Pool({
//     host:PGHOST,
//     database:PGDATABASE,
//     user:PGUSER,
//     password:PGPASSWORD,
//     port:5432
//  })
const client = new pg_1.Client({
    connectionString: "postgresql://junaid7mohamed:2WputHQm5rKa@ep-twilight-grass-a1c0smim.ap-southeast-1.aws.neon.tech/userDB?sslmode=require"
});
//  client.connect()
//  .then(()=>{
//     console.log("DB connected successfully");
//     // Execute SQL queriees
//     // const r = createUserTable();
//     // console.log(r);
//  })
//  .catch((e)=>{
//     console.log("Error connecting to db",e)
//  })
function createUserTable() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`);
        return result;
    });
}
function insertData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const insertQuery = "INSERT INTO users (username,email,password) VALUES ('Junaid','Junaid@gmail.com','password@1##2')";
            const res = yield client.query(insertQuery);
            console.log("Insertion success", res);
        }
        catch (err) {
            console.error("Insertion failed with error", err);
        }
        finally {
            yield client.end();
        }
    });
}
function retrieveData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield client.connect();
            const retrieveQuery = "SELECT * FROM users where email= ''; DELETE * FROM users";
            const value = "Junaid@gmail.com";
            const res = yield client.query(retrieveQuery, [value]);
            console.log("Insertion success", res);
        }
        catch (err) {
            console.error("retrieve failed with error", err);
        }
        finally {
            yield client.end();
        }
    });
}
// insertData()
retrieveData();
// const result =client.query(`
// CREATE TABLE users (
//     id SERIAL PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     email VARCHAR(255) UNIQUE NOT NULL,
//     password VARCHAR(255) NOT NULL,
//     created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
// );
// `,(err,result)=>{
//     if(err) console.error("Erro while querying the db",err)
//     else console.log("Query result",result)
// })
// client.end()
// .then(()=>{
//     console.log("Db connection closed.")
// })
// .catch((e)=>{
//     console.error("Erro while closing db connection",e)
// })

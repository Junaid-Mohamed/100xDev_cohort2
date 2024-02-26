// 
import {Client,Pool} from "pg";
 require("dotenv").config(); // for the env vaiables

let {PGHOST,PGDATABASE,PGUSER,PGPASSWORD} = process.env

// console.log("DB details")
// console.log(PGDATABASE,PGHOST,PGUSER,PGPASSWORD);

//  const client = new Pool({
//     host:PGHOST,
//     database:PGDATABASE,
//     user:PGUSER,
//     password:PGPASSWORD,
//     port:5432
//  })

const client = new Client({
    connectionString:"postgresql://junaid7mohamed:2WputHQm5rKa@ep-twilight-grass-a1c0smim.ap-southeast-1.aws.neon.tech/userDB?sslmode=require"
})

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

async function createUserTable(){
    const result = await client.query(`
    CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(50) UNIQUE NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
    );`)
    return result;
}


async function insertData(){
    try{
        await client.connect()
        const insertQuery = "INSERT INTO users (username,email,password) VALUES ('Junaid','Junaid@gmail.com','password@1##2')"
        const res = await client.query(insertQuery);
        console.log("Insertion success",res);
    }
    catch(err){
        console.error("Insertion failed with error",err)
    }
    finally{
        await client.end();
    }
}

async function retrieveData(){
    try{
        await client.connect()
        const retrieveQuery = "SELECT * FROM users where email=$1"
        const value = "Junaid@gmail.com"
        const res = await client.query(retrieveQuery,[value]);
        console.log("Insertion success",res);
    }
    catch(err){
        console.error("retrieve failed with error",err)
    }
    finally{
        await client.end();
    }
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
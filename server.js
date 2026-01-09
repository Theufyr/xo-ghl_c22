import dotenv from'dotenv';
dotenv.config({path: '.env.local'});
dotenv.config({path: '.env'});
import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

const app = express();
app.use(cors());
app.use(express.json());

const db = await mysql.createConnection({
  port: 3306, // Port MySQL (par défaut : 3306)
  host: 'localhost',
  user: 'adaopte_user',
  password: process.env.VITE_DB_PASSWORD,
  database: 'adaopte'
});

app.post('/sql', async (req, res) => {
  try {
    const [rows] = await db.execute(req.body.query, req.body.params || []);
    res.json({ success: true, data: rows });
  } catch (error) {
    res.json({ success: false, error: error.message });
  }
});

app.listen(3001, () => console.log('API: http://localhost:3001'));
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()
import routes from './routes/index.js'


const app = express()

// Settings
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'))

// Middlewares
app.use(cors(`${process.env.PORT}`));

// Global variables
const PORT = process.env.PORT;

// Rutas
routes(app)

app.listen(PORT, () => {
  console.log(`server on http://localhost:${PORT}`);
});

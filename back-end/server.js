import express from 'express';
import cors from 'cors';
import "dotenv/config"
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRoute from './routes/productRoute.js';
// App config

const app = express();
const port = process.env.port || 4000;
connectDB()
connectCloudinary()

// Middleware
app.use(express.json())
app.use(cors())

// API Endpoints

app.use('/api/user', userRouter)
app.use('/api/product', productRoute) 
app.get('/', (req, res) => {
    res.send('API Working')
})

app.listen(port, () => console.log('Server is started on PORT: '+ port))

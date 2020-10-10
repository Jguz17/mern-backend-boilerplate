const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const app = express()

// Connect Database
connectDB()

// Enable cors
app.use(cors({origin:true,credentials: true}));

// Init Middleware
app.use(express.json({
    extended: true
}))

app.get('/', (req, res) => {
    res.json({
        message: "This is a sample api message"
    })
})

// Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))

const PORT = process.env.PORT || 7000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
const mongoose = require('mongoose')
require('dotenv').config();
const port = 8000;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const path = require('path')
app.use(cors({ origin: "http://localhost:3000" }));
app.use(bodyParser.json());




//Database connection
const dbUri = process.env.MONGO_URI;

mongoose.connect(dbUri, {
    ssl: true
})
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

//Schema Section-----------------------
const contectSchema = new mongoose.Schema({
    fname: String,
    lname: String,
    contact: String,
    message: String,
})

const contactd = mongoose.model('Contact', contectSchema);
////////////-----------------------
const productSchema = new mongoose.Schema({
    image: String,
    productId: String,
    productTitle: String,
    description: String,
    price: String
})

const productd = mongoose.model('Product', productSchema)





//API ------------------------------------------------------------
app.get('/', (req, res) => {
    res.send('Hello World!');
});
//contact api------
app.post('/api/contact1', async (req, res) => {
    try {
        const { fname, lname, contact, message } = req.body;
        const newContact = new contactd({ fname, lname, contact, message,}); // Use the correct model name
        await newContact.save();
        res.status(201).json({ message: 'Data saved successfully', data: newContact });
    } catch (err) {
        res.status(500).json({ message: 'Error saving data', error: err });
    }
});


app.get('/api/contact1', async (req, res) => {
    try {
        const contacts = await contactd.find();
        // console.log(contacts);

        res.status(200).json({ message: 'Data retrieved successfully', data: contacts });

    } catch (err) {
        res.status(500).json({ message: 'Error saving data', error: err });
    }
})
// Set up multer for local Storage--------------------------------
const multer = require('multer')
// const upload = multer ({ dest: 'uploads/'});

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./src/uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now()
        cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({ storage: storage })


//Product api--------
app.post('/api/product', upload.single('image'), async (req, res) => {
    console.log(req.file)
    console.log('Received body:', req.body);
    res.send("uploaded")
    const  {productId, productTitle, description, price } = await req.body;
    const pimage = req.file.filename;
    try {
        const newpdata = new productd({ image: pimage, productId, productTitle, description, price  })
        await newpdata.save();
    } catch (error) {
        console.error("Error saving the DATA:", error);
        res.status(500).send("Server Error");
    }
}
);

app.get('/api/product', async (req, res) => {
    try {
        const products = await productd.find();
        res.status(200).json({ message: 'Data recived success fully ', data: products })
    } catch (err) {
        res.status(500).json({ message: 'Error saving data', error: err });
    }
})

app.listen(port, () => {
    console.log(`server is run port  ${port}`)
});

module.exports = app;








// const mongoose = require('mongoose');
// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');

// const port = 5000;
// const app = express();

// // Middleware
// app.use(bodyParser.json());

// // Database connection
// const dbUri = process.env.uri; // Use a meaningful name for the environment variable
// mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('MongoDB connected successfully'))
//     .catch(err => console.error('MongoDB connection error:', err));

// // Schema
// const contactSchema = new mongoose.Schema({
//     name: String,
//     fname: String,
// });

// const Contact = mongoose.model('Contact', contactSchema); // Make sure the model name is 'Contact'

// // API Endpoints
// app.get('/', (req, res) => {
//     res.send('Hello!');
// });

// app.post('/contact', async (req, res) => {
//     try {
//         const { name, fname } = req.body;
//         const newContact = new Contact({ name, fname }); // Use the correct model name
//         await newContact.save();
//         res.status(201).json({ message: 'Data saved successfully', data: newContact });
//     } catch (err) {
//         res.status(500).json({ message: 'Error saving data', error: err });
//     }
// });

// // Start the server
// app.listen(port, () => {
//     console.log(`Server is running on port ${port}`); // Corrected log message
// });

// module.exports = app;








// //SQL Connection
// const express = require('express');
// const sql = require('mssql');
// const app = express();
// const port = 3001;
// const bodyParser = require('body-parser');
// const cors = require('cors');

// app.use(cors({ origin: "http://localhost:3000" }));
// app.use(bodyParser.json());

// const config = {
//   user: 'sa',
//   password: 'nedo',
//   server: '192.168.0.218',
//   database: 'hassan_db',
//   options: {
//     encrypt: true,
//     trustServerCertificate: true
//   }
// };

// app.get('/', (req, res) => {
//   res.send('respond with a resource');
// });

// app.get('/TEST', (req, res) => {
//   res.send('respond with a TSST');
// });

// app.post('/contact1', (req, res) => {

// });

// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });

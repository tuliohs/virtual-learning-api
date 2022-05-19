// configurar variÃ¡veis de ambiente
//require('dotenv').config()

// configurar o express
const express = require('express')
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const cors = require('cors');
const app = express()

const corsOptions = { origin: '*' }
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(fileUpload());

//para aumentar o tamanho de transferência de arquivos
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb' }));

//FORMA DE CONEXÃƒO LOCAL ON-PREMISSEn
const db = require("./app/databases");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch(err => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });

app.use(express.json())

app.use(`/api/server-image`, require("./app/routes/image.routes"));

app.listen(9093, () => console.log('Server started.'))
const express = require('express')
const path = require('path');
const multer = require('multer')
const https = require('https')

const { DataBase } = require('./db');
const { time } = require('console');

const upload = multer()

const PORT = process.env.PORT || 8080;

const app = express();

// создать дамп
// перед загрузкой читать из дампа
// записывать в этот дамп по изменению

DataBase.init()

app.use('/static', express.static(path.resolve('public')))

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html')
    res.sendFile(path.resolve('send.html'))
})

app.use(express.raw({ type: "application/json" }))

app.post('/stat', (req, res) => {
    DataBase.add(JSON.parse(req.body.toString()))
    res.status(200).send()
})

app.get('/fact', (req, res) => {
    const timeout = parseFloat(Math.random() * 1000)
    setTimeout(() => {
        const factRequest = https.request(
            'https://dog-api.kinduff.com/api/facts', factResponse => {
                factResponse.on('data', d => {
                    // res.set('content-type', 'tex')
                    // console.log('[d]', d)
                    res.send(d)

                })
            })

        factRequest.on('error', error => {
            console.error(error)
        })

        factRequest.end()
    }, timeout)
})

app.use(function (req, res, next) {
    res.status(404).send("Route doesn't exist");
});

app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
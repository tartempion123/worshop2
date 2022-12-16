import express from "express";

const app = express();

app.listen(4321, ()=> {console.log('test')});
const sensors = [
    {id:1, type:'alpha', datas:[1,2,3]},
    {id:2, type:'beta', datas:[1,2,3], metrics:false},
    {id:3, type:'omega', datas:{a:1,b:2}},
]

// GET method route
app.get('/sensors', (req, res) => {
    res.json(sensors)
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})

// GET method route
app.get('/sensors/:id', function (req, res) {
    let result
    // @ts-ignore
    result = sensors.find(el => el.id == req.params.id)
    res.json(result)
})

// POST method route
app.post('/', (req, res) => {
    res.send('POST request to the homepage')
})
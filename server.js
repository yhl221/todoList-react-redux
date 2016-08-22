const express = require('express');
const bodyParser = require('body-parser');

const app = new express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));

const state = {todoItem: [], filterName: 'All'};

app.post('/todos', (req, res) => {

    state.todoItem.push({ text:req.body.text, isDone: false});
    res.json(state.todoItem);
});

app.delete('/todos',(req,res)=>{

    state.todoItem.splice(req.body.index, 1);
    res.json(state.todoItem);
});

app.put('/todos',(req,res)=>{
    state.todoItem[req.body.index].isDone = !state.todoItem[req.body.index].isDone;
    res.json(state.todoItem);
});

app.put('/setName',(req,res)=>{
    state.filterName=req.body.name;
    res.json(state);
});

var server = app.listen(3000, function () {
    console.log('listening at port %s', server.address().port);
});

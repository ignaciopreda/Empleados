
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/employees');

var Employee = mongoose.model('Employee', mongoose.Schema({
  name:String,
  dept:String,
  area:String,
  status:String,
  contact:String,
  salary:String
}));

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/client'));

// -------------------------------------------------------------

app.get('/api/employees', function(req, res){
  Employee.find(function(err, employees){
    if(err)
      res.send(err);
    res.json(employees);
  });
});

//filtro por id - minuto 21:46
app.get('/api/employees/:id', function(req, res){
  Employee.findOne({_id:req.params.id}, function(err, employee){
    if(err)
      res.send(err);
    res.json(employee);
  });
});

//minuto 25:10
app.post('/api/employees', function(req, res){
  Employee.create( req.body, function(err, employees){
    if(err)
      res.send(err);
    res.json(employees);
  });
});

//minuto 29:15
app.delete('/api/employees/:id', function(req, res){
  Employee.findOneAndRemove({_id:req.params.id}, function(err, employee){
    if(err)
      res.send(err);
    res.json(employee);
  });
});

//minuto 31:00
app.put('/api/employees/:id', function(req, res){
  var query = {
    name: req.body.name,
    dept: req.body.dept,
    area: req.body.area,
    status: req.body.status,
    contact: req.body.contact,
    salary: req.body.salary
  }
  Employee.findOneAndUpdate({_id:req.params.id}, query, function(err, employee){
    if(err)
      res.send(err);
    res.json(employee);
  });
});


app.listen(3000, function(){
  console.log('SERVER IS RUNNING ON PORT 3000 !!');
})

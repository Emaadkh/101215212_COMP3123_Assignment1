const express = require('express')
const route = express.Router()
const emp = require('../models/employees')

route.post('/employees', async(req, res) => {
    
    try {
        if(req.body.content) {
            return res.status(400).send({
                message: "Employee content can not be empty"
            });
        }
        const employee = new emp(req.body)
        await employee.save()
        res.status(201).send(employee)
    }
    catch(error) {
        res.status(500).send(error)
    }
});

route.get('/employees', async(req, res) => {
    try {
        const employees = await emp.find({})
        res.status(200).send(employees)
    }
    catch(error) {
        res.status(500).send(error)
    }
});


route.get('/employees/:eid', async(req, res) => {
    
    try {
        if(req.body.content) {
            return res.status(400).send({
                message: "Employee content can not be empty"
            });
        }
        const employee = await emp.findById(req.params.eid)
        res.status(200).send(employee)
    }
    catch(error) {
        res.status(500).send(error)
    }
    
});

route.put('/employees/:eid', async(req, res) => {
    try {
        if(req.body.content) {
            return res.status(400).send({
                message: "Employee content can not be empty"
            });
        }
        console.log(req.body)
        const updatedEmployee = await emp.findByIdAndUpdate(req.params.eid, req.body)
        await updatedEmployee.save()
        res.status(202).send(req.body)
      } catch (err) {
        res.status(500).send(err)
      }
    
});

route.delete('/employees/:eid', async (req, res) => {
    try {
        if(req.body.content) {
            return res.status(400).send({
                message: "Employee content can not be empty"
            });
        }
        const employee = await emp.findByIdAndDelete(req.params.eid)
        if (!employee) { 
            res.status(404).send("No item found")
        }
        res.status(204).send(employee)
      } catch (err) {
        res.status(500).send(err)
      }
});

module.exports = route

/*
{

    "first_name": "Emad",
    "last_name": "Khoda",
    "email": "emad@gmail.com",
    "gender": "Male",
    "salary": 65000
}
*/
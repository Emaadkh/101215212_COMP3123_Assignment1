const express = require('express');
const employeeModel = require('../models/employees');
const route = express.Router()
const emp = require('../models/employees')

route.post('/employees', async(req, res) => {
    
    try {
        if (!req.body) {
            return res.status(400).send({
              message: "employee content can not be empty",
            });
          }else{
            const newemployee = new employeeModel(req.body);
            const employee = await newemployee.save();
            res.status(201).send(employee);
    
          }
        }
        catch (error) {
        res.status(500).send(error);
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
        if (!req.body) {
            return res.status(400).send({
              message: "employee content can not be empty",
            });
          }else{
            const newEmployee = await employeeModel.findById(req.params.eid, req.body);
            res.status(200).send(newEmployee);
          }
      
    } catch (error) {
      res.status(500).send(error);
    }
    
});

route.put('/employees/:eid', async(req, res) => {
    try {
        if (!req.body) {
            return res.status(400).send({
              message: "employee content can not be empty",
            });
          }else{
            const newEmployee = await employeeModel.findByIdAndUpdate(
                req.params.eid,
                req.body
              );
              res.status(202).send(newEmployee);
          }
    } catch (error) {
      res.status(500).send(error);
    }
    
});

route.delete('/employees/:eid', async (req, res) => {
    try {
        if(!req.body) {
            return res.status(400).send({
                message: "employee content can not be empty"
            });
        }else{
            const deletedEmployee = await employeeModel.findByIdAndDelete(req.params.eid);
            
            if (!deletedEmployee){
                res.status(404).send({message: "No employee to be Deleted"});
            }
            res.status(204).send(deletedEmployee);
        }
    }catch (error){
        res.status(500).send(error)
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